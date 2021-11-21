import React, { FC } from "react";
import { Field } from "formik";

import { BombItem } from "../../../../interfaces";

interface IProps {
  item: BombItem;
  position: number;
}

const Section: FC<IProps> = ({ item, position }) => {
  return (
    <div>
      <Field
        name={`items[${position}].name`}
        aria-label="sectionName"
        value={item.name}
      />
      <Field
        name={`items[${position}].description`}
        aria-label="sectionDesc"
        value={item.description}
      />
    </div>
  );
};

export default Section;
