import react_default from '../vendor/deps/react.js';
import react_dom_default from '../vendor/deps/react-dom.js';
import './index.css.js';
import App from './App.jsx.js';
import react_jsx_dev_runtime_default from '../vendor/deps/react_jsx-dev-runtime.js';

var _jsxFileName = "/home/arya/github_opensorce/opensaused_r/opensaused/src/content.jsx";
 const React = react_default.__esModule ? react_default.default : react_default;
 const ReactDOM = react_dom_default.__esModule ? react_dom_default.default : react_dom_default;
 const _jsxDEV = react_jsx_dev_runtime_default["jsxDEV"];
const x = document.createElement("button");
x.setAttribute("value", "save");
x.innerHTML = "span";
x.id = "crx-root";
document.body.append(x);
console.log(x);
ReactDOM.render(/* @__PURE__ */ _jsxDEV(React.StrictMode, {
  children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 3
}, this), root);
