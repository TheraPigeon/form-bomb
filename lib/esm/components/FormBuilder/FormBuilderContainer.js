import { jsx as _jsx } from "react/jsx-runtime";
import defaultBuilderConfig from './config';
import FormBuilderView from './FormBuilderView';
var FormBuilderContainer = function (_a) {
    var _b = _a.config, config = _b === void 0 ? defaultBuilderConfig : _b, _c = _a.onSubmit, onSubmit = _c === void 0 ? function (values) { } : _c;
    return _jsx(FormBuilderView, { config: config, onSubmit: onSubmit }, void 0);
};
export default FormBuilderContainer;
//# sourceMappingURL=FormBuilderContainer.js.map