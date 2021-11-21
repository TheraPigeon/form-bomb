import React, { FC } from "react";

import { BombItem, BombItemType, BombItemFormat } from "../../../../interfaces";
import Section from "../Section";
import { MultipleChoice } from "../questions";

interface IProps {
  item: BombItem;
  key: number;
}

const Item: FC<IProps> = ({ item, key }) => {
  if (item.type === BombItemType.SECTION) {
    return <Section key={key} item={item} />;
  } else if (item.type === BombItemType.QUESTION) {
    switch (item.format) {
      case BombItemFormat.MULTIPLE_CHOICE:
        return <MultipleChoice key={key} item={item} />;
      default:
        return <MultipleChoice key={key} item={item} />;
    }
  }

  return null;
};

export default Item;
