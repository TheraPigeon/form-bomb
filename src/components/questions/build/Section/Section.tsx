import React, { FC } from "react";
import { Field } from "formik";

import { BombItem } from "../../../../interfaces";

interface IProps {
  item: BombItem;
  key: number;
}

const Section: FC<IProps> = ({ item, key }) => {
  return (
    <div>
      <Field
        name={`items[${key}].name`}
        aria-label="sectionName"
        value={item.name}
      />
      <Field
        name={`items[${key}].description`}
        aria-label="sectionDesc"
        value={item.description}
      />
    </div>
  );
};

export default Section;
