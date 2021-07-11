import { FC } from 'react';
import { BuilderConfig, BombConfig } from '../../interfaces';
interface IProps {
    config?: BuilderConfig;
    onSubmit?: (config: BombConfig) => any;
}
declare const FormBuilderContainer: FC<IProps>;
export default FormBuilderContainer;