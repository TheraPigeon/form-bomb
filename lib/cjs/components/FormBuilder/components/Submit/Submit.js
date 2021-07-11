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
var Submit = function (_a) {
    var label = _a.label;
    var _b = formik_1.useFormikContext(), values = _b.values, submitForm = _b.submitForm;
    return (jsx_runtime_1.jsx("button", __assign({ type: "submit", onClick: function () { return submitForm(); } }, { children: label || 'Submit' }), void 0));
};
exports.default = Submit;
