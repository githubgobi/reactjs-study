webpackHotUpdate("static/development/pages/users/list.js",{

/***/ "./pages/users/list.js":
/*!*****************************!*\
  !*** ./pages/users/list.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/MyLayout */ "./pages/comps/MyLayout.js");
/* harmony import */ var _comps_user_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/user/List */ "./pages/comps/user/List.js");
/* harmony import */ var _comps_user_Create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/user/Create */ "./pages/comps/user/Create.js");
var _jsxFileName = "/home/g-ah/Documents/Gobi/study/reactjs-study/pages/users/list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CreateButton = function CreateButton() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: "/users/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Create"));
};

function List() {
  var match = this.props.match;
  console.log(match);
  return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(CreateButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_comps_user_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=list.js.7cabc01b6c9cc9fb3e71.hot-update.js.map