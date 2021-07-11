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
exports.renderWithFormikBuild = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var formik_1 = require("formik");
var config_1 = require("../components/FormBuilder/config");
var lodash_1 = require("lodash");
var renderWithFormikBuild = function (ui, onSubmit, values, options) {
    if (values === void 0) { values = lodash_1.cloneDeep(config_1.defaultBomb); }
    return __assign(__assign({}, react_1.render(jsx_runtime_1.jsx(formik_1.Formik, __assign({ initialValues: values, onSubmit: onSubmit }, { children: ui }), void 0))), options);
};
exports.renderWithFormikBuild = renderWithFormikBuild;
