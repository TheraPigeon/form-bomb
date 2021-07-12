"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var build_1 = require("../../../questions/build");
var Items = function () {
    var values = formik_1.useFormikContext().values;
    return (jsx_runtime_1.jsx("div", { children: values.items.map(function (item, index) { return (jsx_runtime_1.jsx(build_1.Item, { item: item }, index)); }) }, void 0));
};
exports.default = Items;
