/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConvertFileUrl } from './ConvertFileUrl';

export type ConvertJsonRequest = {
    output_file_name: string;
    output_type: 'pdf' | 'png' | 'png.zip';
    file: ConvertFileUrl;
};

