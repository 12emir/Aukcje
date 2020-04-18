webpackHotUpdate("static/development/pages/aukcje/[id].js",{

/***/ "./pages/aukcje/[id].js":
/*!******************************!*\
  !*** ./pages/aukcje/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Timer */ "./components/Timer.js");
var _this = undefined,
    _jsxFileName = "/Users/kozakiewicz/Desktop/aukcje-app/pages/aukcje/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Auction = function Auction() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      single = _useState[0],
      setSingle = _useState[1];

  var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(function (response) {
      return response.json();
    }).then(function (json) {
      setSingle(json);
    }).then(function () {
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].from(".main-img", {
        duration: 0.4,
        opacity: 0,
        x: -100
      });
    });
  }, []);
  return __jsx("div", {
    className: " flex ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-1/2 pr-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "main-img rounded-lg shadow-2xl ",
    src: "/images/item.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-1/2 bg-white rounded-lg p-4 shadow-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: "2020-09-01T01:02:03",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("h1", {
    className: "h text-purple-500 text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, single.title), __jsx("p", {
    className: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, single.body)));
};

/* harmony default export */ __webpack_exports__["default"] = (Auction);

/***/ })

})
//# sourceMappingURL=[id].js.2d0b530025149c897a5e.hot-update.js.map