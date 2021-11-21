import React, { FC } from "react";

import { BombItem, BombItemType, BombItemFormat } from "../../../../interfaces";
import Section from "../Section";
import { MultipleChoice } from "../questions";

interface IProps {
  item: BombItem;
  position: number;
}

const Item: FC<IProps> = ({ item, position }) => {
  if (item.type === BombItemType.SECTION) {
    return <Section position={position} item={item} />;
  } else if (item.type === BombItemType.QUESTION) {
    switch (item.format) {
      case BombItemFormat.MULTIPLE_CHOICE:
        return <MultipleChoice position={position} item={item} />;
      default:
        return <MultipleChoice position={position} item={item} />;
    }
  }

  return null;
};

export default Item;
