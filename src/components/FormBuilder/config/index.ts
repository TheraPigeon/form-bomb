import { BuilderConfig, BombConfig } from '../../../interfaces';

export const defaults = {
  submitText: 'Create Form',
  formTitle: 'Untitled Form',
  formDescription: 'Form description',
};

export const defaultBomb: BombConfig = {
  meta: {
    title: defaults.formTitle,
    description: defaults.formDescription,
  },
};

const defaultConfig: BuilderConfig = {
  meta: {
    submitText: defaults.submitText,
  },
};

export default defaultConfig;
