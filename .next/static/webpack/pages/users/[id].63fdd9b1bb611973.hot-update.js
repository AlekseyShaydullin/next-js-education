"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconsole.log((_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nvar __N_SSP = true;\nfunction User(param) {\n    let { user  } = param;\n    _s();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { city , street , suite , zipcode  } = user.address;\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        keywords: user.name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__id),\n                    children: [\n                        \"Пользователь c id \",\n                        query.id,\n                        \":\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__text),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Имя пользователя:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 16,\n                            columnNumber: 41\n                        }, this),\n                        \" \",\n                        user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__text),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Login:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 17,\n                            columnNumber: 41\n                        }, this),\n                        \" \",\n                        user.username\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__text),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Почта:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 18,\n                            columnNumber: 41\n                        }, this),\n                        \" \",\n                        user.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__text),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Домашний адрес:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 19,\n                            columnNumber: 41\n                        }, this),\n                        \" \",\n                        zipcode,\n                        \" \",\n                        city,\n                        \". \",\n                        street,\n                        \" \",\n                        suite\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__text),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Телефон:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 20,\n                            columnNumber: 41\n                        }, this),\n                        \" \",\n                        user.phone\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_5___default().user__text),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"Вебсайт:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 21,\n                            columnNumber: 41\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://\".concat(user.website),\n                            target: \"_blank\",\n                            children: user.website\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 21,\n                            columnNumber: 57\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CosmosBook\\\\Desktop\\\\dev\\\\next-js-education\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"VR2mp68S/cRvdqdH5htLccMcbak=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDVztBQUNkO0FBQ2lDO0FBQ1Q7QUFDakRLLFFBQVFDLEdBQUcsQ0FBQ0YsaUVBQUtBOztBQUNGLFNBQVNHLEtBQUssS0FBTSxFQUFFO1FBQVIsRUFBQ0MsS0FBSSxFQUFDLEdBQU47O0lBRTNCLE1BQU0sRUFBQ0MsTUFBSyxFQUFDLEdBQUdSLHNEQUFTQTtJQUN6QixNQUFNLEVBQUNTLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBQyxHQUFHTCxLQUFLTSxPQUFPO0lBQ3JEVCxRQUFRQyxHQUFHLENBQUNFO0lBQ1YscUJBQ0UsOERBQUNMLGlFQUFhQTtRQUFDWSxVQUFVUCxLQUFLUSxJQUFJO2tCQUNoQyw0RUFBQ0M7OzhCQUNDLDhEQUFDQztvQkFBR0MsV0FBV2YsMEVBQWM7O3dCQUFFO3dCQUFtQkssTUFBTVksRUFBRTt3QkFBQzs7Ozs7Ozs4QkFDM0QsOERBQUNDO29CQUFFSCxXQUFXZiw0RUFBZ0I7O3NDQUFFLDhEQUFDb0I7c0NBQUU7Ozs7Ozt3QkFBcUI7d0JBQUVoQixLQUFLUSxJQUFJOzs7Ozs7OzhCQUNuRSw4REFBQ007b0JBQUVILFdBQVdmLDRFQUFnQjs7c0NBQUUsOERBQUNvQjtzQ0FBRTs7Ozs7O3dCQUFVO3dCQUFFaEIsS0FBS2lCLFFBQVE7Ozs7Ozs7OEJBQzVELDhEQUFDSDtvQkFBRUgsV0FBV2YsNEVBQWdCOztzQ0FBRSw4REFBQ29CO3NDQUFFOzs7Ozs7d0JBQVU7d0JBQUVoQixLQUFLa0IsS0FBSzs7Ozs7Ozs4QkFDekQsOERBQUNKO29CQUFFSCxXQUFXZiw0RUFBZ0I7O3NDQUFFLDhEQUFDb0I7c0NBQUU7Ozs7Ozt3QkFBbUI7d0JBQUVYO3dCQUFRO3dCQUFFSDt3QkFBSzt3QkFBR0M7d0JBQU87d0JBQUVDOzs7Ozs7OzhCQUNuRiw4REFBQ1U7b0JBQUVILFdBQVdmLDRFQUFnQjs7c0NBQUUsOERBQUNvQjtzQ0FBRTs7Ozs7O3dCQUFZO3dCQUFFaEIsS0FBS21CLEtBQUs7Ozs7Ozs7OEJBQzNELDhEQUFDTDtvQkFBRUgsV0FBV2YsNEVBQWdCOztzQ0FBRSw4REFBQ29CO3NDQUFFOzs7Ozs7d0JBQVk7c0NBQUMsOERBQUNJOzRCQUFFQyxNQUFNLFdBQXdCLE9BQWJyQixLQUFLc0IsT0FBTzs0QkFBSUMsUUFBTztzQ0FBVXZCLEtBQUtzQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16SCxDQUFDO0dBcEJ1QnZCOztRQUVOTixrREFBU0E7OztLQUZITSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvdXNlci5tb2R1bGUuc2NzcydcclxuY29uc29sZS5sb2coc3R5bGUpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHt1c2VyfSkge1xyXG5cclxuICBjb25zdCB7cXVlcnl9ID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7Y2l0eSwgc3RyZWV0LCBzdWl0ZSwgemlwY29kZX0gPSB1c2VyLmFkZHJlc3NcclxuY29uc29sZS5sb2codXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXt1c2VyLm5hbWV9PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZS51c2VyX19pZH0+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMIGMgaWQge3F1ZXJ5LmlkfTo8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudXNlcl9fdGV4dH0+PGI+0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzo8L2I+IHt1c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudXNlcl9fdGV4dH0+PGI+TG9naW46PC9iPiB7dXNlci51c2VybmFtZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS51c2VyX190ZXh0fT48Yj7Qn9C+0YfRgtCwOjwvYj4ge3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudXNlcl9fdGV4dH0+PGI+0JTQvtC80LDRiNC90LjQuSDQsNC00YDQtdGBOjwvYj4ge3ppcGNvZGV9IHtjaXR5fS4ge3N0cmVldH0ge3N1aXRlfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnVzZXJfX3RleHR9PjxiPtCi0LXQu9C10YTQvtC9OjwvYj4ge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudXNlcl9fdGV4dH0+PGI+0JLQtdCx0YHQsNC50YI6PC9iPiA8YSBocmVmPXtgaHR0cHM6Ly8ke3VzZXIud2Vic2l0ZX1gfSB0YXJnZXQ9J19ibGFuayc+e3VzZXIud2Vic2l0ZX08L2E+PC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L01haW5Db250YWluZXI+XHJcblxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YClcclxuICBjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3VzZXJ9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwiTWFpbkNvbnRhaW5lciIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsIlVzZXIiLCJ1c2VyIiwicXVlcnkiLCJjaXR5Iiwic3RyZWV0Iiwic3VpdGUiLCJ6aXBjb2RlIiwiYWRkcmVzcyIsImtleXdvcmRzIiwibmFtZSIsInNlY3Rpb24iLCJoMSIsImNsYXNzTmFtZSIsInVzZXJfX2lkIiwiaWQiLCJwIiwidXNlcl9fdGV4dCIsImIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJhIiwiaHJlZiIsIndlYnNpdGUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});