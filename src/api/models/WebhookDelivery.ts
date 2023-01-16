/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDelivery = {
    readonly id: number;
    name: string;
    type?: 'webhook';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    url: string;
    headers?: Record<string, any> | null;
    payload?: Record<string, any> | null;
};

