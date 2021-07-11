import React, { FC, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';

import { defaults } from '../../config';
import BombConfig from '../../../../interfaces/BombConfig.interface';

const BuildHeader: FC = () => {
  const { values }: { values: BombConfig } = useFormikContext();

  return (
    <div>
      <Field
        type="text"
        name="meta.title"
        aria-label="title"
        value={values.meta.title}
      />
      <Field
        type="text"
        name="meta.description"
        aria-label="description"
        value={values.meta.description}
      />
    </div>
  );
};

export default BuildHeader;
