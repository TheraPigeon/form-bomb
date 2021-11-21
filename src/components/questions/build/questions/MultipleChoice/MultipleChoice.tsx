import React, { FC } from "react";
import { BombItem } from "../../../../../interfaces";
import { Field } from "formik";

interface IProps {
  item: BombItem;
  position: number;
}

const MultipleChoice: FC<IProps> = ({ item, position }) => {
  return (
    <div>
      <Field
        className="input"
        name={`items[${position}].name`}
        type="text"
        aria-label="questionName"
        value={item.name}
      />
      <div>
        {item.options?.map((option, i) => (
          <Field
            className="input"
            name={`items[${position}].options[${i}].name`}
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
