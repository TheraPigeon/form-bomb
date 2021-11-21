import React, { FC } from "react";
import { Field } from "formik";

import { BombItem } from "../../../../interfaces";

interface IProps {
  item: BombItem;
  name: string;
}

const Section: FC<IProps> = ({ item, name }) => {
  return (
    <div>
      <Field
        id={`${name}-id`}
        name={name}
        aria-label="sectionName"
        value={item.name}
      />
      <Field
        id={`${name}-id`}
        name={name}
        aria-label="sectionDesc"
        value={item.description}
      />
    </div>
  );
};

export default Section;
