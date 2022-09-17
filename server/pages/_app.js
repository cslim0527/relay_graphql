"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./styles/GlobalStyles.ts
var GlobalStyles = __webpack_require__(808);
;// CONCATENATED MODULE: external "react-relay/hooks"
const hooks_namespaceObject = require("react-relay/hooks");
;// CONCATENATED MODULE: external "relay-runtime"
const external_relay_runtime_namespaceObject = require("relay-runtime");
;// CONCATENATED MODULE: ./utils/fetcher.ts
const fetchGraphQL = async (query, variables) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${"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"}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  return await response.json();
};

/* harmony default export */ const fetcher = (fetchGraphQL);
;// CONCATENATED MODULE: ./utils/relayEnvironment.ts



const fetchQuery = (params, variables) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetcher(params.text, variables);
};

/* harmony default export */ const relayEnvironment = (new external_relay_runtime_namespaceObject.Environment({
  network: external_relay_runtime_namespaceObject.Network.create(fetchQuery),
  store: new external_relay_runtime_namespaceObject.Store(new external_relay_runtime_namespaceObject.RecordSource())
}));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles/* GlobalStyles */.n, {}), /*#__PURE__*/jsx_runtime_.jsx(hooks_namespaceObject.RelayEnvironmentProvider, {
      environment: relayEnvironment,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ StyledButton),
/* harmony export */   "n": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{margin:0;padding:0;box-sizing:border-box;}ol,ul{list-style-type:none;}"]);
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalStyles__StyledButton",
  componentId: "sc-18e9lhg-0"
})(["cursor:pointer;border-radius:4px;padding:0.4rem 0.6rem;border:1px solid #e8e8e8;background-color:#f0f0f0;&:disabled{cursor:not-allowed;}"]);

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(320));
module.exports = __webpack_exports__;

})();