import { BuilderConfig, BombConfig } from '../../../interfaces';

export const defaultSubmitButtonText: string = 'Create Form';

export const defaultBomb: BombConfig = {
  meta: {
    title: 'Form',
  },
};

const defaultConfig: BuilderConfig = {
  meta: {
    submitButtonText: defaultSubmitButtonText,
  },
};

export default defaultConfig;
