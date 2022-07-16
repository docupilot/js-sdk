/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDelivery = {
    readonly id: number;
    name: string;
    type?: 'webhook';
    url: string;
    headers?: Record<string, any> | null;
    payload?: Record<string, any> | null;
};

