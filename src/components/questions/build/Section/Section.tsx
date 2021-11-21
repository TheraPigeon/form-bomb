import React, { FC } from "react";
import { Field } from "formik";

import { BombItem } from "../../../../interfaces";

interface IProps {
  item: BombItem;
}

const Section: FC<IProps> = ({ item }) => {
  return (
    <div>
      <Field
        id={item.name}
        name={item.name}
        aria-label="sectionName"
        value={item.name}
      />
      <Field
        id={item.description}
        name={item.description}
        aria-label="sectionDesc"
        value={item.description}
      />
    </div>
  );
};

export default Section;
