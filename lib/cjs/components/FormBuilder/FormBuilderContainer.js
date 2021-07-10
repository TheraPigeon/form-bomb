"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var config_1 = __importStar(require("./config"));
var FormBuilderView_1 = __importDefault(require("./FormBuilderView"));
var FormBuilderContainer = function (_a) {
    var _b = _a.config, config = _b === void 0 ? config_1.default : _b, _c = _a.submit, submit = _c === void 0 ? function (bomb) { } : _c;
    var _d = react_1.useState(config_1.defaultBomb), bomb = _d[0], setBomb = _d[1];
    var submitFn = function () {
        submit(bomb);
    };
    return jsx_runtime_1.jsx(FormBuilderView_1.default, { config: config, submit: submitFn }, void 0);
};
exports.default = FormBuilderContainer;
//# sourceMappingURL=FormBuilderContainer.js.map