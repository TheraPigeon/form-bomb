import React, { FC } from 'react';
import { BombItem } from '../../../../../interfaces';
import { Field } from 'formik';

interface IProps {
  item: BombItem;
}

const MultipleChoice: FC<IProps> = ({ item }) => {
  return (
    <div>
      <Field type="text" aria-label="questionName" value={item.name} />
      <div>
        {item.options?.map((option, i) => (
          <Field
            type="text"
            key={i}
            aria-label={`questionOption${i}`}
            value={option.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
