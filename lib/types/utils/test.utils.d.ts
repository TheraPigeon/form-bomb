import { ReactElement } from 'react';
import { RenderOptions } from '@testing-library/react';
import { BombConfig } from '../interfaces';
declare type FormikRenderFunc = (ui: ReactElement, onSubmit: (values: BombConfig, actions: any) => any, values?: BombConfig, options?: RenderOptions) => any;
export declare const renderWithFormikBuild: FormikRenderFunc;
export {};
