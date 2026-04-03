/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PDFTransformMultipartRequest = {
    inputs: Array<Blob>;
    input_ids: Array<string>;
    operations: Array<Record<string, any>>;
    output_file_name: string;
};

