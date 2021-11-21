import React, { FC } from "react";
import { BombItem } from "../../../../../interfaces";
import { Field } from "formik";

interface IProps {
  item: BombItem;
}

const MultipleChoice: FC<IProps> = ({ item }) => {
  return (
    <div>
      <Field
        id={item.name}
        name={item.name}
        type="text"
        aria-label="questionName"
        value={item.name}
      />
      <div>
        {item.options?.map((option, i) => (
          <Field
            id={item.name}
            name={`${item.name}-${option.name}-${i}`}
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
