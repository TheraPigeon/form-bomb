import React, { FC } from 'react';
import { Field } from 'formik';

import { BombItem } from '../../../../interfaces';

interface IProps {
  item: BombItem;
}

const Section: FC<IProps> = ({ item }) => {
  return (
    <div>
      <Field aria-label="sectionName" value={item.name} />
      <Field aria-label="sectionDesc" value={item.description} />
    </div>
  );
};

export default Section;
