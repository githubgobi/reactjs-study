webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/MyLayout */ "./pages/comps/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/g-ah/Documents/Gobi/study/reactjs-study/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Header from '../pages/comps/Header';



var indexPageContent = __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, " Hello World Next.js");

var PostLink = function PostLink(props) {
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("link", {
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title)));
};

var Index = function Index() {
  return __jsx(_comps_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: indexPageContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  });
}; // export default function Blog(){
//     return (
//         <Layout>
//             <h1>Blog</h1>
//             <ul>
//                 <PostLink title="Hello Next.js"/>
//                 <PostLink title="Learn Next.js is awesome"/>
//                 <PostLink title="Deploy apps with Zeit"/>
//             </ul>
//         </Layout>
//     );
// }
// export default Index;

/***/ })

})
//# sourceMappingURL=index.js.91fb9fb526e031b8625a.hot-update.js.map