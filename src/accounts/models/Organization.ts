/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Organization = {
    name: string;
    readonly subdomain: string;
    readonly created_time: string;
    readonly updated_time: string;
    readonly enforce_mfa: boolean;
    logo?: Blob | null;
    /**
     * Whether password-based login is allowed for this organization
     */
    readonly password_based_login: boolean;
    readonly region: 'us1';
};

