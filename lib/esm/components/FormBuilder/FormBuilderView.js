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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik, Form } from 'formik';
import { defaults } from './config';
import { BuildHeader, Submit, Items, AddChoices } from './components';
import { defaultBomb } from './config';
var FormBuilderView = function (_a) {
    var config = _a.config, onSubmit = _a.onSubmit;
    return (_jsx("div", { children: _jsx(Formik, __assign({ initialValues: defaultBomb, onSubmit: onSubmit }, { children: _jsxs(Form, { children: [_jsx(BuildHeader, {}, void 0), _jsx(Items, {}, void 0), _jsx(AddChoices, {}, void 0), _jsx(Submit, { label: config.meta.submitText || defaults.submitText }, void 0)] }, void 0) }), void 0) }, void 0));
};
export default FormBuilderView;
//# sourceMappingURL=FormBuilderView.js.map