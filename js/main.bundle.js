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

module.exports = function () {
    $('.menu__hamburger').on('click', function () {
        $(this).toggleClass('menu__hamburger_active');
        $('.menu__wrapper').toggleClass('menu__wrapper_active');
        $('body').toggleClass('overflow-hidden');
    })
}

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(){
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
};

/***/ }),

/***/ "./src/js/modules/select.js":
/*!**********************************!*\
  !*** ./src/js/modules/select.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
    let x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];

        a = document.createElement("DIV");

        a.setAttribute("class", "custom-select__selected");

        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

        x[i].appendChild(a);

        b = document.createElement("DIV");

        b.setAttribute("class", "custom-select__items custom-select__items_hide");

        for (j = 1; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                let y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });

            b.appendChild(c);
        }

        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("custom-select__items_hide");
            this.classList.toggle("custom-select__arrow_active");
        });
    }

    function closeAllSelect(elmnt) {
        let x, y, i, arrNo = [];
        x = document.getElementsByClassName("custom-select__items");
        y = document.getElementsByClassName("custom-select__selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("custom-select__arrow_active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("custom-select__items_hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);
}

/***/ }),

/***/ "./src/js/modules/typed.js":
/*!*********************************!*\
  !*** ./src/js/modules/typed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let typed = function (el, options) {

    this.el = $(el);
    this.options = $.extend({}, $.fn.typed.defaults, options);
    this.baseText = this.el.text() || this.el.attr('placeholder') || '';
    this.typeSpeed = this.options.typeSpeed;
    this.startDelay = this.options.startDelay;
    this.backSpeed = this.options.backSpeed;
    this.backDelay = this.options.backDelay;
    this.strings = this.options.strings;
    this.strPos = 0;
    this.arrayPos = 0;
    this.stopNum = 0;
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;
    this.stop = false;
    this.showCursor = this.isInput ? false : this.options.showCursor;
    this.cursorChar = this.options.cursorChar;
    this.isInput = this.el.is('input');
    this.attr = this.options.attr || (this.isInput ? 'placeholder' : null);
    this.build();
};

typed.prototype = {

    constructor: typed,
    init: function () {
        let self = this;
        self.timeout = setTimeout(function () {
            self.typewrite(self.strings[self.arrayPos], self.strPos);
        }, self.startDelay);
    },
    build: function () {
        if (this.showCursor === true) {
            this.cursor = $("<span class=\"typed__cursor\">" + this.cursorChar + "</span>");
            this.el.after(this.cursor);
        }
        this.init();
    },
    typewrite: function (curString, curStrPos) {
        if (this.stop === true)
            return;

        let humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
        let self = this;
        self.timeout = setTimeout(function () {
            let charPause = 0;
            let substr = curString.substr(curStrPos);
            if (substr.charAt(0) === '^') {
                let skip = 1;
                if (/^\^\d+/.test(substr)) {
                    substr = /\d+/.exec(substr)[0];
                    skip += substr.length;
                    charPause = parseInt(substr);
                }

                curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
            }

            self.timeout = setTimeout(function () {
                if (curStrPos === curString.length) {
                    self.options.onStringtyped(self.arrayPos);

                    if (self.arrayPos === self.strings.length - 1) {
                        self.options.callback();
                        self.curLoop++;

                        if (self.loop === false || self.curLoop === self.loopCount)
                            return;
                    }

                    self.timeout = setTimeout(function () {
                        self.backspace(curString, curStrPos);
                    }, self.backDelay);
                } else {

                    if (curStrPos === 0)
                        self.options.preStringtyped(self.arrayPos);

                    let nextString = self.baseText + curString.substr(0, curStrPos + 1);
                    if (self.attr) {
                        self.el.attr(self.attr, nextString);
                    } else {
                        self.el.text(nextString);
                    }

                    curStrPos++;
                    self.typewrite(curString, curStrPos);
                }
            }, charPause);
        }, humanize);

    },
    backspace: function (curString, curStrPos) {
        if (this.stop === true) {
            return;
        }

        let humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
        let self = this;

        self.timeout = setTimeout(function () {

            let nextString = self.baseText + curString.substr(0, curStrPos);
            if (self.attr) {
                self.el.attr(self.attr, nextString);
            } else {
                self.el.text(nextString);
            }

            if (curStrPos > self.stopNum) {
                curStrPos--;
                self.backspace(curString, curStrPos);
            } else if (curStrPos <= self.stopNum) {
                self.arrayPos++;

                if (self.arrayPos === self.strings.length) {
                    self.arrayPos = 0;
                    self.init();
                } else
                    self.typewrite(self.strings[self.arrayPos], curStrPos);
            }
        }, humanize);

    },
    stop: function () {
        let self = this;

        self.stop = true;
        clearInterval(self.timeout);
    },
    start: function () {
        let self = this;
        if (self.stop === false)
            return;

        this.stop = false;
        this.init();
    },
    reset: function () {
        let self = this;
        clearInterval(self.timeout);
        let id = this.el.attr('id');
        this.el.after('<span id="' + id + '"/>')
        this.el.remove();
        this.cursor.remove();
        self.options.resetCallback();
    }

};

$.fn.typed = function (option) {
    return this.each(function () {
        let $this = $(this),
            data = $this.data('typed'),
            options = typeof option == 'object' && option;
        if (!data) $this.data('typed', (data = new typed(this, options)));
        if (typeof option == 'string') data[option]();
    });
};

$.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    backDelay: 500,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    callback: function () {},
    preStringtyped: function () {},
    onStringtyped: function () {},
    resetCallback: function () {}
};

$(document).ready(function () {
    $("#typed").typed({
        strings: ["Разрабатываем корпоративные сайты",
            "Интернет магазины",
            "Landing Page",
            "Сайты визитки",
            "Личные сайты",
            "Интернет порталы",
            "Нестандартные сайты с вашим функционалом",
        ],
        typeSpeed: 30,
        backDelay: 1500,
        loop: true,
        loopCount: false,
        callback: function () {
            console.log("Callback");
        },
    });
});


module.exports = function () {}

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map