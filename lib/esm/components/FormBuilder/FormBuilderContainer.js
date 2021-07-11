import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import defaultBuilderConfig, { defaultBomb } from './config';
import FormBuilderView from './FormBuilderView';
var FormBuilderContainer = function (_a) {
    var _b = _a.config, config = _b === void 0 ? defaultBuilderConfig : _b, _c = _a.onSubmit, onSubmit = _c === void 0 ? function (bomb) { } : _c;
    var _d = useState(defaultBomb), bomb = _d[0], setBomb = _d[1];
    var submitFn = function () {
        onSubmit(bomb);
    };
    return _jsx(FormBuilderView, { config: config, onSubmit: submitFn }, void 0);
};
export default FormBuilderContainer;
//# sourceMappingURL=FormBuilderContainer.js.map