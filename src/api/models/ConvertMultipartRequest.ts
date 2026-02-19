/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConvertMultipartRequest = {
    output_file_name: string;
    output_type: 'pdf' | 'png' | 'png.zip';
    file: Blob;
};

