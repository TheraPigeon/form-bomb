"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var interfaces_1 = require("../../../../interfaces");
var Section_1 = __importDefault(require("../Section"));
var questions_1 = require("../questions");
var Item = function (_a) {
    var item = _a.item;
    if (item.type === interfaces_1.BombItemType.SECTION) {
        return jsx_runtime_1.jsx(Section_1.default, { item: item }, void 0);
    }
    else if (item.type === interfaces_1.BombItemType.QUESTION) {
        switch (item.format) {
            case interfaces_1.BombItemFormat.MULTIPLE_CHOICE:
                return jsx_runtime_1.jsx(questions_1.MultipleChoice, { item: item }, void 0);
            default:
                return jsx_runtime_1.jsx(questions_1.MultipleChoice, { item: item }, void 0);
        }
    }
    return null;
};
exports.default = Item;
