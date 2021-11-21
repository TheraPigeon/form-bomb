import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field } from "formik";
var Section = function (_a) {
    var item = _a.item, position = _a.position;
    return (_jsxs("div", { children: [_jsx(Field, { className: "input", name: "items[" + position + "].name", "aria-label": "sectionName", value: item.name }, void 0), _jsx(Field, { className: "input", name: "items[" + position + "].description", "aria-label": "sectionDesc", value: item.description }, void 0)] }, void 0));
};
export default Section;
