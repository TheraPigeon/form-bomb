var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useFormikContext } from 'formik';
import { cloneDeep } from 'lodash';
import AddChoicesView from './AddChoicesView';
import { defaults } from '../../config';
var AddChoices = function () {
    var values = useFormikContext().values;
    var setFieldValue = useFormikContext().setFieldValue;
    var choices = [
        {
            label: 'Add Question',
            setValue: function () {
                setFieldValue('items', __spreadArray(__spreadArray([], values.items), [
                    cloneDeep(defaults.bombQuestion),
                ]));
            },
        },
        {
            label: 'Add Section',
            setValue: function () {
                setFieldValue('items', __spreadArray(__spreadArray([], values.items), [
                    cloneDeep(defaults.bombSection),
                ]));
            },
        },
    ];
    return _jsx(AddChoicesView, { choices: choices }, void 0);
};
export default AddChoices;
//# sourceMappingURL=AddChoices.js.map