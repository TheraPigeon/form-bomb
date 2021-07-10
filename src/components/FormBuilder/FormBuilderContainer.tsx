import React, { FC, useState } from 'react';

import { BuilderConfig, BombConfig } from '../../interfaces';
import defaultBuilderConfig, { defaultBomb } from './config';
import FormBuilderView from './FormBuilderView';

interface IProps {
  config?: BuilderConfig;
  submit?: (config: BombConfig) => any;
}

const FormBuilderContainer: FC<IProps> = ({
  config = defaultBuilderConfig,
  submit = (bomb: BombConfig) => {},
}) => {
  const [bomb, setBomb] = useState<BombConfig>(defaultBomb);
  const submitFn = () => {
    submit(bomb);
  };

  return <FormBuilderView config={config} submit={submitFn} />;
};

export default FormBuilderContainer;
