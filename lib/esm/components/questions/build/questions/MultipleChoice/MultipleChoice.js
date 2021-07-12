import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field } from 'formik';
var MultipleChoice = function (_a) {
    var _b;
    var item = _a.item;
    return (_jsxs("div", { children: [_jsx(Field, { type: "text", "aria-label": "questionName", value: item.name }, void 0), _jsx("div", { children: (_b = item.options) === null || _b === void 0 ? void 0 : _b.map(function (option, i) { return (_jsx(Field, { type: "text", "aria-label": "questionOption" + i, value: option.name }, i)); }) }, void 0)] }, void 0));
};
export default MultipleChoice;
