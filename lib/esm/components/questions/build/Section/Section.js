import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field } from 'formik';
var Section = function (_a) {
    var item = _a.item;
    return (_jsxs("div", { children: [_jsx(Field, { "aria-label": "sectionName", value: item.name }, void 0), _jsx(Field, { "aria-label": "sectionDesc", value: item.description }, void 0)] }, void 0));
};
export default Section;
