"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var Section = function (_a) {
    var item = _a.item, position = _a.position;
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(formik_1.Field, { className: "input", name: "items[" + position + "].name", "aria-label": "sectionName", value: item.name }, void 0), jsx_runtime_1.jsx(formik_1.Field, { className: "input", name: "items[" + position + "].description", "aria-label": "sectionDesc", value: item.description }, void 0)] }, void 0));
};
exports.default = Section;
