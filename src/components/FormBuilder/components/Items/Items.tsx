import React, { FC } from "react";

import { useFormikContext } from "formik";
import { BombConfig } from "../../../../interfaces";
import { Item } from "../../../questions/build";

const Items: FC = () => {
  const { values }: { values: BombConfig } = useFormikContext();

  return (
    <div>
      {values.items.map((item, index) => (
        <Item
          name={`${item.type}-${item.name}-${index}`}
          key={index}
          item={item}
        />
      ))}
    </div>
  );
};

export default Items;
