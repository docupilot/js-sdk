/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserOrganization = {
    readonly id: number;
    name: string;
    subdomain: string;
    active?: boolean;
    enforce_mfa?: boolean;
    region?: 'us1';
};

