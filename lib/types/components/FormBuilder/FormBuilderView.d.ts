import { FC } from 'react';
import { BuilderConfig } from '../../interfaces';
interface IProps {
    config: BuilderConfig;
    submit: () => void;
}
declare const FormBuilderView: FC<IProps>;
export default FormBuilderView;
