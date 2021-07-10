import React, { FC } from 'react';

import { BuilderConfig, BombConfig } from '../../interfaces';
import { defaultSubmitButtonText } from './config';

interface IProps {
  config: BuilderConfig;
  submit: () => void;
}

const FormBuilderView: FC<IProps> = ({ config, submit }) => {
  return (
    <button onClick={submit}>
      {config.meta.submitButtonText || defaultSubmitButtonText}
    </button>
  );
};

export default FormBuilderView;
