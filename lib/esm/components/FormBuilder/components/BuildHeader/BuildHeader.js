import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field, useFormikContext } from "formik";
var BuildHeader = function () {
    var values = useFormikContext().values;
    return (_jsxs("div", { children: [_jsx(Field, { className: "input", type: "text", name: "meta.title", "aria-label": "title", value: values.meta.title }, void 0), _jsx(Field, { className: "input", type: "text", name: "meta.description", "aria-label": "description", value: values.meta.description }, void 0)] }, void 0));
};
export default BuildHeader;
