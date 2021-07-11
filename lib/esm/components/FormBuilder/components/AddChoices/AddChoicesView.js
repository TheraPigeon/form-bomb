import { jsx as _jsx } from "react/jsx-runtime";
import { Choice } from './components';
var AddChoicesView = function (_a) {
    var choices = _a.choices;
    return (_jsx("div", { children: choices.map(function (choice, index) {
            return (_jsx(Choice, { label: choice.label, onClick: choice.setValue }, index));
        }) }, void 0));
};
export default AddChoicesView;
//# sourceMappingURL=AddChoicesView.js.map