import { FC } from "react";
import { BombItem } from "../../../../interfaces";
interface IProps {
    item: BombItem;
    position: number;
}
declare const Item: FC<IProps>;
export default Item;
