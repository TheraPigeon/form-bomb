import React, { FC } from 'react';
import { Formik, Form } from 'formik';

import { BuilderConfig, BombConfig } from '../../interfaces';
import { defaults } from './config';
import BuildHeader from './components/BuildHeader';
import { defaultBomb } from './config';

interface IProps {
  config: BuilderConfig;
  onSubmit: () => void;
}

const FormBuilderView: FC<IProps> = ({ config, onSubmit }) => {
  return (
    <div>
      <Formik initialValues={defaultBomb} onSubmit={onSubmit}>
        <Form>
          <BuildHeader />
          <button type="submit" onClick={onSubmit}>
            {config.meta.submitText || defaults.submitText}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormBuilderView;
