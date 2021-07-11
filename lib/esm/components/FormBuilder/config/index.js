import { BombItemType } from '../../../interfaces';
var bombQuestion = {
    type: BombItemType.QUESTION,
    name: 'Untitled Question',
    description: 'Description (optional)',
};
var bombSection = {
    type: BombItemType.SECTION,
    name: 'Untitled Section',
    description: 'Description (optional)',
};
export var defaults = {
    submitText: 'Create Form',
    formTitle: 'Untitled Form',
    formDescription: 'Description (optional)',
    bombQuestion: bombQuestion,
    bombSection: bombSection,
};
export var defaultBomb = {
    meta: {
        title: defaults.formTitle,
        description: defaults.formDescription,
    },
    items: [],
};
var defaultConfig = {
    meta: {
        submitText: defaults.submitText,
    },
};
export default defaultConfig;
