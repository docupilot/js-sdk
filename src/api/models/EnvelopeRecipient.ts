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
    status?: 'created' | 'sent' | 'viewed' | 'completed' | 'declined';
    readonly created_time: string;
    readonly updated_time: string;
    workspace: number;
    envelope: number;
};

