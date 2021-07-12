"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBomb = exports.defaults = void 0;
var interfaces_1 = require("../../../interfaces");
var bombQuestion = {
    type: interfaces_1.BombItemType.QUESTION,
    name: 'Untitled Question',
    description: 'Description (optional)',
    options: [{ name: 'Option 1', value: 1 }],
};
var bombSection = {
    type: interfaces_1.BombItemType.SECTION,
    name: 'Untitled Section',
    description: 'Description (optional)',
};
exports.defaults = {
    submitText: 'Create Form',
    formTitle: 'Untitled Form',
    formDescription: 'Description (optional)',
    bombQuestion: bombQuestion,
    bombSection: bombSection,
};
exports.defaultBomb = {
    meta: {
        title: exports.defaults.formTitle,
        description: exports.defaults.formDescription,
    },
    items: [],
};
var defaultConfig = {
    meta: {
        submitText: exports.defaults.submitText,
    },
};
exports.default = defaultConfig;
