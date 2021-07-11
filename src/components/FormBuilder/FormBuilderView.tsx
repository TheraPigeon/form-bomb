import React, { FC } from 'react';
import { Formik, Form } from 'formik';

import { BuilderConfig, BombConfig } from '../../interfaces';
import { defaults } from './config';
import { BuildHeader, Submit, Items, AddChoices } from './components';
import { defaultBomb } from './config';

interface IProps {
  config: BuilderConfig;
  onSubmit: (values: BombConfig) => any;
}

const FormBuilderView: FC<IProps> = ({ config, onSubmit }) => {
  return (
    <div>
      <Formik initialValues={defaultBomb} onSubmit={onSubmit}>
        <Form>
          <BuildHeader />
          <Items />
          <AddChoices />
          <Submit label={config.meta.submitText || defaults.submitText} />
        </Form>
      </Formik>
    </div>
  );
};

export default FormBuilderView;
