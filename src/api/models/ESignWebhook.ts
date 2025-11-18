/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ESignWebhook = {
    readonly id: number;
    name: string;
    url: string;
    active?: boolean;
    event_subscriptions?: Array<'recipient_viewed' | 'recipient_signed' | 'recipient_declined' | 'envelope_completed' | 'envelope_expired'>;
    hmac_secret?: string | null;
    readonly created_at: string;
    readonly updated_at: string;
    created_by: number;
    updated_by?: number | null;
};

