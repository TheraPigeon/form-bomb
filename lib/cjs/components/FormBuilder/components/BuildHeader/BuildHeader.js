"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var BuildHeader = function () {
    var values = formik_1.useFormikContext().values;
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(formik_1.Field, { className: "input", type: "text", name: "meta.title", "aria-label": "title", value: values.meta.title }, void 0), jsx_runtime_1.jsx(formik_1.Field, { className: "input", type: "text", name: "meta.description", "aria-label": "description", value: values.meta.description }, void 0)] }, void 0));
};
exports.default = BuildHeader;
