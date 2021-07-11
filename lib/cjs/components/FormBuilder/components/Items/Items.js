"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var Items = function () {
    var values = formik_1.useFormikContext().values;
    return (jsx_runtime_1.jsx("div", { children: values.items.map(function (item, index) {
            return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", { children: item.name }, void 0), jsx_runtime_1.jsx("p", { children: item.description }, void 0)] }, index));
        }) }, void 0));
};
exports.default = Items;
