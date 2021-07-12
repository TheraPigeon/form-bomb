import React, { FC } from 'react';

import { BombItem, BombItemType, BombItemFormat } from '../../../../interfaces';
import Section from '../Section';
import { MultipleChoice } from '../questions';

interface IProps {
  item: BombItem;
}

const Item: FC<IProps> = ({ item }) => {
  if (item.type === BombItemType.SECTION) {
    return <Section item={item} />;
  } else if (item.type === BombItemType.QUESTION) {
    switch (item.format) {
      case BombItemFormat.MULTIPLE_CHOICE:
        return <MultipleChoice item={item} />;
      default:
        return <MultipleChoice item={item} />;
    }
  }

  return null;
};

export default Item;
