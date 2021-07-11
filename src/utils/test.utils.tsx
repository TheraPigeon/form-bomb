import React, { ReactElement, FC } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Formik } from 'formik';

import { defaultBomb } from '../components/FormBuilder/config';
import { BombConfig } from '../interfaces';

type FormikRenderFunc = (
  ui: ReactElement,
  onSubmit: (values: BombConfig, actions: any) => any,
  values?: BombConfig,
  options?: RenderOptions
) => any;

export const renderWithFormikBuild: FormikRenderFunc = (
  ui: ReactElement,
  onSubmit: (values: BombConfig, actions: any) => any,
  values: BombConfig = defaultBomb,
  options?: RenderOptions
) => {
  return {
    ...render(
      <Formik initialValues={values} onSubmit={onSubmit}>
        {ui}
      </Formik>
    ),
    ...options,
  };
};
