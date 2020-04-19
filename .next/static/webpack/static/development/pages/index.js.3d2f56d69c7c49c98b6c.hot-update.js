webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-progressive-image-loading */ "./node_modules/react-progressive-image-loading/build/index.js");
/* harmony import */ var react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_progressive_image_loading__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kozakiewicz/Desktop/aukcje-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      mode: "cors"
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      setData(json);
    }).then(function () {
      var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      tl.staggerFrom(".item", 1.2, {
        opacity: 0,
        y: 30,
        x: -40,
        delay: 0.1,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      }, "0.1");
    });
  }, []);
  return __jsx("div", {
    className: "xl:p-4 p-1  min-h-screen\t grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-6 gap-4 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, data.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/aukcje/[id]",
      as: "/aukcje/".concat(item.id),
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "item cursor-pointer relative  ",
      key: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("img", {
      className: "rounded-lg shadow-xl transform hover:scale-105 duration-100",
      src: "/images/04.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }), __jsx("div", {
      style: {
        top: "10px",
        left: "10px",
        padding: "2px 9px"
      },
      className: "absolute bg-white rounded-lg shadow-lg text-sm uppercase font-bold text-gray-600 p-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, "Play for $4"), __jsx("div", {
      className: "p-3 text-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, item.title)));
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.3d2f56d69c7c49c98b6c.hot-update.js.map