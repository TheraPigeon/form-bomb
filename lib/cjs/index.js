"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBuilder = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var FormBuilder_1 = __importDefault(require("./components/FormBuilder"));
exports.FormBuilder = FormBuilder_1.default;
var FormBomb = function () { return jsx_runtime_1.jsx("div", { children: "FormBomb" }, void 0); };
exports.default = FormBomb;
