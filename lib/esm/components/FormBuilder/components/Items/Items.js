import { jsx as _jsx } from "react/jsx-runtime";
import { useFormikContext } from "formik";
import { Item } from "../../../questions/build";
var Items = function () {
    var values = useFormikContext().values;
    return (_jsx("div", { children: values.items.map(function (item, index) { return (_jsx(Item, { position: index, item: item }, void 0)); }) }, void 0));
};
export default Items;
