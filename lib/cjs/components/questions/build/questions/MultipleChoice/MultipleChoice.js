"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var MultipleChoice = function (_a) {
    var _b;
    var item = _a.item;
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(formik_1.Field, { type: "text", "aria-label": "questionName", value: item.name }, void 0), jsx_runtime_1.jsx("div", { children: (_b = item.options) === null || _b === void 0 ? void 0 : _b.map(function (option, i) { return (jsx_runtime_1.jsx(formik_1.Field, { type: "text", "aria-label": "questionOption" + i, value: option.name }, i)); }) }, void 0)] }, void 0));
};
exports.default = MultipleChoice;
