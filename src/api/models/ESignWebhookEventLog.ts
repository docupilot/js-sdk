/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ESignWebhookEventLog = {
    readonly id: number;
    event: 'recipient_viewed' | 'recipient_signed' | 'recipient_declined' | 'envelope_completed' | 'envelope_expired';
    status_code: number;
    readonly triggered_at: string;
    attempts?: number;
    next_retry_at?: string | null;
    webhook: number;
    envelope: string;
};

