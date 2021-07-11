"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var formik_1 = require("formik");
var lodash_1 = require("lodash");
var AddChoicesView_1 = __importDefault(require("./AddChoicesView"));
var config_1 = require("../../config");
var AddChoices = function () {
    var values = formik_1.useFormikContext().values;
    var setFieldValue = formik_1.useFormikContext().setFieldValue;
    var choices = [
        {
            label: 'Add Question',
            setValue: function () {
                setFieldValue('items', __spreadArray(__spreadArray([], values.items), [
                    lodash_1.cloneDeep(config_1.defaults.bombQuestion),
                ]));
            },
        },
        {
            label: 'Add Section',
            setValue: function () {
                setFieldValue('items', __spreadArray(__spreadArray([], values.items), [
                    lodash_1.cloneDeep(config_1.defaults.bombSection),
                ]));
            },
        },
    ];
    return jsx_runtime_1.jsx(AddChoicesView_1.default, { choices: choices }, void 0);
};
exports.default = AddChoices;
