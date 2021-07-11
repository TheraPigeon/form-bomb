import { FC } from 'react';
import { BuilderConfig } from '../../interfaces';
interface IProps {
    config: BuilderConfig;
    onSubmit: () => void;
}
declare const FormBuilderView: FC<IProps>;
export default FormBuilderView;
