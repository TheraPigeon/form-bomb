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
import { defaultSubmitButtonText } from './config';
var FormBuilderView = function (_a) {
    var config = _a.config, submit = _a.submit;
    return (_jsx("button", __assign({ onClick: submit }, { children: config.meta.submitButtonText || defaultSubmitButtonText }), void 0));
};
export default FormBuilderView;
//# sourceMappingURL=FormBuilderView.js.map