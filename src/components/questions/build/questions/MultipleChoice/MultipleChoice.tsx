import React, { FC } from "react";
import { BombItem } from "../../../../../interfaces";
import { Field } from "formik";

interface IProps {
  item: BombItem;
  name: string;
}

const MultipleChoice: FC<IProps> = ({ item, name }) => {
  return (
    <div>
      <Field
        name={name}
        type="text"
        aria-label="questionName"
        value={item.name}
      />
      <div>
        {item.options?.map((option, i) => (
          <Field
            name={`${name}-option-${i}`}
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
