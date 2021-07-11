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
var Choice = function (_a) {
    var label = _a.label, onClick = _a.onClick;
    return (_jsx("button", __assign({ type: "button", onClick: onClick }, { children: label }), void 0));
};
export default Choice;
//# sourceMappingURL=Choice.js.map