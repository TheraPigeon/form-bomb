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
var Choice = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (jsx_runtime_1.jsx("button", __assign({ className: "button is-primary", type: "button", onClick: onClick }, { children: label }), void 0));
};
exports.default = Choice;
