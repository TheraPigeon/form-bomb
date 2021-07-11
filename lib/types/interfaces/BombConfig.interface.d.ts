import { BombItem } from './BombItem.interface';
interface MetaConfig {
    title?: string;
    description?: string;
}
export default interface BombConfig {
    meta: MetaConfig;
    items: BombItem[];
}
export {};
