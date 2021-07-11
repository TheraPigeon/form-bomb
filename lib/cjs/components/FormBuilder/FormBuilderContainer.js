"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var config_1 = __importDefault(require("./config"));
var FormBuilderView_1 = __importDefault(require("./FormBuilderView"));
var FormBuilderContainer = function (_a) {
    var _b = _a.config, config = _b === void 0 ? config_1.default : _b, _c = _a.onSubmit, onSubmit = _c === void 0 ? function (values) { } : _c;
    return jsx_runtime_1.jsx(FormBuilderView_1.default, { config: config, onSubmit: onSubmit }, void 0);
};
exports.default = FormBuilderContainer;
//# sourceMappingURL=FormBuilderContainer.js.map