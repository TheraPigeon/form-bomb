import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormikContext } from 'formik';
var Items = function () {
    var values = useFormikContext().values;
    return (_jsx("div", { children: values.items.map(function (item, index) {
            return (_jsxs("div", { children: [_jsx("h1", { children: item.name }, void 0), _jsx("p", { children: item.description }, void 0)] }, index));
        }) }, void 0));
};
export default Items;
