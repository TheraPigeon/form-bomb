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
import { render } from '@testing-library/react';
import { Formik } from 'formik';
import { defaultBomb } from '../components/FormBuilder/config';
export var renderWithFormikBuild = function (ui, onSubmit, values, options) {
    if (values === void 0) { values = defaultBomb; }
    return __assign(__assign({}, render(_jsx(Formik, __assign({ initialValues: values, onSubmit: onSubmit }, { children: ui }), void 0))), options);
};
//# sourceMappingURL=test.utils.js.map