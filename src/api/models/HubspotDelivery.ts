/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HubspotDelivery = {
    readonly id: number;
    type?: 'hubspot';
    account: number | null;
    path?: string | null;
    name: string;
};

