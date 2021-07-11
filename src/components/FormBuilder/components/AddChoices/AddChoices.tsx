import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import { cloneDeep } from 'lodash';

import AddChoicesView from './AddChoicesView';
import { BombConfig } from '../../../../interfaces';
import { defaults } from '../../config';

export interface ChoiceItem {
  label: string;
  setValue: () => void;
}

const AddChoices: FC = () => {
  const { values }: { values: BombConfig } = useFormikContext();
  const { setFieldValue } = useFormikContext();
  const choices: ChoiceItem[] = [
    {
      label: 'Add Question',
      setValue: () => {
        setFieldValue('items', [
          ...values.items,
          cloneDeep(defaults.bombQuestion),
        ]);
      },
    },
    {
      label: 'Add Section',
      setValue: () => {
        setFieldValue('items', [
          ...values.items,
          cloneDeep(defaults.bombSection),
        ]);
      },
    },
  ];

  return <AddChoicesView choices={choices} />;
};

export default AddChoices;
