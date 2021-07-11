import React, { FC, useState } from 'react';

import { BuilderConfig, BombConfig } from '../../interfaces';
import defaultBuilderConfig, { defaultBomb } from './config';
import FormBuilderView from './FormBuilderView';

interface IProps {
  config?: BuilderConfig;
  onSubmit?: (values: BombConfig) => any;
}

const FormBuilderContainer: FC<IProps> = ({
  config = defaultBuilderConfig,
  onSubmit = (values: BombConfig) => {},
}) => {
  return <FormBuilderView config={config} onSubmit={onSubmit} />;
};

export default FormBuilderContainer;
