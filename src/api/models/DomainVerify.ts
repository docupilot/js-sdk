/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DomainFailure } from './DomainFailure';

export type DomainVerify = {
    success: Array<'txt_record' | 'spf_record'>;
    failures: DomainFailure;
};

