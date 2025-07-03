/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnvelopeRecipient = {
    readonly id: number;
    readonly recipient_id: string;
    email_address: string;
    subject: string;
    email_body: string;
    name: string;
    order: number;
    status?: 'created' | 'failed' | 'sent' | 'viewed' | 'completed' | 'declined';
    readonly created_at: string;
    readonly updated_at: string;
    invited_at?: string | null;
    last_reminded_at?: string | null;
    completed_at?: string | null;
    workspace: number;
    envelope: number;
};

