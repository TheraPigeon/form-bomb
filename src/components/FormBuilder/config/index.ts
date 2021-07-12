import { BuilderConfig, BombConfig } from '../../../interfaces';
import { BombItemType, BombItem, ItemOption } from '../../../interfaces';

const bombQuestion: BombItem = {
  type: BombItemType.QUESTION,
  name: 'Untitled Question',
  description: 'Description (optional)',
  options: [{ name: 'Option 1', value: 1 }],
};
const bombSection: BombItem = {
  type: BombItemType.SECTION,
  name: 'Untitled Section',
  description: 'Description (optional)',
};

export const defaults = {
  submitText: 'Create Form',
  formTitle: 'Untitled Form',
  formDescription: 'Description (optional)',
  bombQuestion,
  bombSection,
};

export const defaultBomb: BombConfig = {
  meta: {
    title: defaults.formTitle,
    description: defaults.formDescription,
  },
  items: [],
};

const defaultConfig: BuilderConfig = {
  meta: {
    submitText: defaults.submitText,
  },
};

export default defaultConfig;
