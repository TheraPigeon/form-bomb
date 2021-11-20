import React, { FC } from "react";

import { BombItem, BombItemType, BombItemFormat } from "../../../../interfaces";
import Section from "../Section";
import { MultipleChoice } from "../questions";

interface IProps {
  item: BombItem;
  name: string;
}

const Item: FC<IProps> = ({ item, name }) => {
  if (item.type === BombItemType.SECTION) {
    return <Section name={name} item={item} />;
  } else if (item.type === BombItemType.QUESTION) {
    switch (item.format) {
      case BombItemFormat.MULTIPLE_CHOICE:
        return <MultipleChoice name={name} item={item} />;
      default:
        return <MultipleChoice name={name} item={item} />;
    }
  }

  return null;
};

export default Item;
