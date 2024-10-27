/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    name: string;
    type?: 'webhook';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    url: string;
    headers?: Record<string, any> | null;
    payload?: Record<string, any> | null;
};

