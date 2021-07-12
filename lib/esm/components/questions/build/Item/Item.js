import { jsx as _jsx } from "react/jsx-runtime";
import { BombItemType, BombItemFormat } from '../../../../interfaces';
import Section from '../Section';
import { MultipleChoice } from '../questions';
var Item = function (_a) {
    var item = _a.item;
    if (item.type === BombItemType.SECTION) {
        return _jsx(Section, { item: item }, void 0);
    }
    else if (item.type === BombItemType.QUESTION) {
        switch (item.format) {
            case BombItemFormat.MULTIPLE_CHOICE:
                return _jsx(MultipleChoice, { item: item }, void 0);
            default:
                return _jsx(MultipleChoice, { item: item }, void 0);
        }
    }
    return null;
};
export default Item;
