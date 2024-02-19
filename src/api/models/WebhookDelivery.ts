/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDelivery = {
    readonly id: number;
    headers?: Record<string, any>;
    payload?: Record<string, any>;
    name: string;
    type?: 'webhook';
    success_callback_url?: string | null;
    failure_email_recipients?: string | null;
    url: string;
};

