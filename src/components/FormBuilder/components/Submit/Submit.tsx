import React, { FC } from 'react';
import { BombConfig } from '../../../../interfaces';

import { useFormikContext } from 'formik';

interface IProps {
  label?: string;
}

const Submit: FC<IProps> = ({ label }) => {
  const { values, submitForm } = useFormikContext();

  return (
    <button type="submit" onClick={() => submitForm()}>
      {label || 'Submit'}
    </button>
  );
};

export default Submit;
