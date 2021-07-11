"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var config_1 = require("./config");
var components_1 = require("./components");
var config_2 = require("./config");
var FormBuilderView = function (_a) {
    var config = _a.config, onSubmit = _a.onSubmit;
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx(formik_1.Formik, __assign({ initialValues: config_2.defaultBomb, onSubmit: onSubmit }, { children: jsx_runtime_1.jsxs(formik_1.Form, { children: [jsx_runtime_1.jsx(components_1.BuildHeader, {}, void 0), jsx_runtime_1.jsx(components_1.Items, {}, void 0), jsx_runtime_1.jsx(components_1.AddChoices, {}, void 0), jsx_runtime_1.jsx(components_1.Submit, { label: config.meta.submitText || config_1.defaults.submitText }, void 0)] }, void 0) }), void 0) }, void 0));
};
exports.default = FormBuilderView;
