import { FC } from 'react';
import { BuilderConfig, BombConfig } from '../../interfaces';
interface IProps {
    config: BuilderConfig;
    onSubmit: (values: BombConfig) => any;
}
declare const FormBuilderView: FC<IProps>;
export default FormBuilderView;
