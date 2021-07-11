"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("./components");
var AddChoicesView = function (_a) {
    var choices = _a.choices;
    return (jsx_runtime_1.jsx("div", { children: choices.map(function (choice, index) {
            return (jsx_runtime_1.jsx(components_1.Choice, { label: choice.label, onClick: choice.setValue }, index));
        }) }, void 0));
};
exports.default = AddChoicesView;
//# sourceMappingURL=AddChoicesView.js.map