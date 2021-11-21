import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field } from "formik";
var Section = function (_a) {
    var item = _a.item, key = _a.key;
    return (_jsxs("div", { children: [_jsx(Field, { name: "items[" + key + "].name", "aria-label": "sectionName", value: item.name }, void 0), _jsx(Field, { name: "items[" + key + "].description", "aria-label": "sectionDesc", value: item.description }, void 0)] }, void 0));
};
export default Section;
