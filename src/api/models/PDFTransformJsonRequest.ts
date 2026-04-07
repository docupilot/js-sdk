/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PDFTransformInput } from './PDFTransformInput';

export type PDFTransformJsonRequest = {
    inputs: Array<PDFTransformInput>;
    operations: Array<Record<string, any>>;
    output_file_name: string;
};

