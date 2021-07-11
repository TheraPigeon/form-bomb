var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useFormikContext } from 'formik';
var Submit = function (_a) {
    var label = _a.label;
    var _b = useFormikContext(), values = _b.values, submitForm = _b.submitForm;
    return (_jsx("button", __assign({ type: "submit", onClick: function () { return submitForm(); } }, { children: label || 'Submit' }), void 0));
};
export default Submit;
