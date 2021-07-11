import React, { FC, useState } from 'react';

import { BuilderConfig, BombConfig } from '../../interfaces';
import defaultBuilderConfig, { defaultBomb } from './config';
import FormBuilderView from './FormBuilderView';

interface IProps {
  config?: BuilderConfig;
  onSubmit?: (config: BombConfig) => any;
}

const FormBuilderContainer: FC<IProps> = ({
  config = defaultBuilderConfig,
  onSubmit = (bomb: BombConfig) => {},
}) => {
  const [bomb, setBomb] = useState<BombConfig>(defaultBomb);
  const submitFn = () => {
    onSubmit(bomb);
  };

  return <FormBuilderView config={config} onSubmit={submitFn} />;
};

export default FormBuilderContainer;
