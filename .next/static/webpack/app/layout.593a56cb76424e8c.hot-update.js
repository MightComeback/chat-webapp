"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/components/LogInButton.tsx":
/*!****************************************!*\
  !*** ./app/components/LogInButton.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst LogInButton = ()=>{\n    var _session_user;\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex p-2 items-center gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: session.user.image,\n                    alt: session.user.name,\n                    className: \"inline-block rounded-full shadow-md border border-gray-300\",\n                    width: 40,\n                    height: 40\n                }, void 0, false, {\n                    fileName: \"/Users/ivan/Documents/GitHub/chat-webapp/app/components/LogInButton.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold hidden sm:inline-block\",\n                    children: session.user.name\n                }, void 0, false, {\n                    fileName: \"/Users/ivan/Documents/GitHub/chat-webapp/app/components/LogInButton.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ivan/Documents/GitHub/chat-webapp/app/components/LogInButton.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"text-white shadow-xl font-bold uppercase p-2 px-6 text-xs bg-white shadow-md rounded-xl\",\n            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n            children: \"log in\"\n        }, void 0, false, {\n            fileName: \"/Users/ivan/Documents/GitHub/chat-webapp/app/components/LogInButton.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ivan/Documents/GitHub/chat-webapp/app/components/LogInButton.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LogInButton, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = LogInButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogInButton);\nvar _c;\n$RefreshReg$(_c, \"LogInButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9nSW5CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVxRDtBQUN0QjtBQUUvQixNQUFNRyxjQUFjLElBQU07UUFJbkJDOztJQUhMLE1BQU0sRUFBRUMsTUFBTUQsUUFBTyxFQUFFLEdBQUdKLDJEQUFVQTtJQUNwQyxxQkFDRSw4REFBQ007a0JBQ0VGLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsZ0JBQUFBLFFBQVNHLElBQUksY0FBYkgsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWVJLEtBQUYsa0JBQ1osOERBQUNGO1lBQUlHLFdBQVU7OzhCQUNiLDhEQUFDUCxtREFBS0E7b0JBQ0pRLEtBQUtOLFFBQVFHLElBQUksQ0FBQ0MsS0FBSztvQkFDdkJHLEtBQUtQLFFBQVFHLElBQUksQ0FBQ0ssSUFBSTtvQkFDdEJILFdBQVU7b0JBQ1ZJLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs4QkFFViw4REFBQ0M7b0JBQUVOLFdBQVU7OEJBQ1ZMLFFBQVFHLElBQUksQ0FBQ0ssSUFBSTs7Ozs7Ozs7Ozs7c0NBSXRCLDhEQUFDSTtZQUNDUCxXQUFVO1lBQ1ZRLFNBQVMsSUFBTWhCLHVEQUFNQTtzQkFDdEI7Ozs7O3FCQUdGOzs7Ozs7QUFHUDtHQTNCTUU7O1FBQ3NCSCx1REFBVUE7OztLQURoQ0c7QUE2Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTG9nSW5CdXR0b24udHN4PzhhZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBMb2dJbkJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtzZXNzaW9uPy51c2VyPy5pbWFnZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMiBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxuICAgICAgICAgICAgYWx0PXtzZXNzaW9uLnVzZXIubmFtZSF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcm91bmRlZC1mdWxsIHNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgaGlkZGVuIHNtOmlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAge3Nlc3Npb24udXNlci5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBzaGFkb3cteGwgZm9udC1ib2xkIHVwcGVyY2FzZSBwLTIgcHgtNiB0ZXh0LXhzIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLXhsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX1cbiAgICAgICAgPlxuICAgICAgICAgIGxvZyBpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dJbkJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwiSW1hZ2UiLCJMb2dJbkJ1dHRvbiIsInNlc3Npb24iLCJkYXRhIiwiZGl2IiwidXNlciIsImltYWdlIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/LogInButton.tsx\n"));

/***/ })

});