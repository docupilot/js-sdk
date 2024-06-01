/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedDomain = {
    readonly id?: number;
    domain_name?: string;
    txt_record?: string;
    is_txt_verified?: boolean;
    is_spf_verified?: boolean;
    readonly spf_record?: string;
};

