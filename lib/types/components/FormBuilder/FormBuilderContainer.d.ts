import { FC } from "react";
import { BuilderConfig, BombConfig } from "../../interfaces";
interface FormBuilderProps {
    config?: BuilderConfig;
    onSubmit?: (values: BombConfig) => any;
}
declare const FormBuilderContainer: FC<FormBuilderProps>;
export default FormBuilderContainer;
