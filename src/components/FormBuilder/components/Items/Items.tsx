import React, { FC } from 'react';

import { useFormikContext } from 'formik';
import { BombConfig } from '../../../../interfaces';

const Items: FC = () => {
  const { values }: { values: BombConfig } = useFormikContext();

  return (
    <div>
      {values.items.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
