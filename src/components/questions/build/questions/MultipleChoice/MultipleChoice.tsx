import React, { FC } from "react";
import { BombItem } from "../../../../../interfaces";
import { Field } from "formik";

interface IProps {
  item: BombItem;
  key: number;
}

const MultipleChoice: FC<IProps> = ({ item, key }) => {
  return (
    <div>
      <Field
        name={`items[${key}].name`}
        type="text"
        aria-label="questionName"
        value={item.name}
      />
      <div>
        {item.options?.map((option, i) => (
          <Field
            name={`items[${key}].options[${i}].name`}
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
