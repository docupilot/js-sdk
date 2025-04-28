/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvelopeDocuments } from './EnvelopeDocuments';
import type { EnvelopeRecipient } from './EnvelopeRecipient';

export type EnvelopeDetails = {
    readonly id: number;
    documents: Array<EnvelopeDocuments>;
    recipients: Array<EnvelopeRecipient>;
    readonly envelope_id: string;
    sn_envelope_id?: string | null;
    sn_invite_id?: string | null;
    name: string;
    status?: 'created' | 'pending' | 'voided' | 'declined' | 'completed';
    cc?: string | null;
    sequenced_signing?: boolean;
    expiry?: string | null;
    /**
     * ex: P3D to send first reminders after 3 days of sending invite
     */
    first_reminder?: string | null;
    /**
     * ex: P3D to send follow up reminders every 3 days
     */
    reminder_frequency?: string | null;
    warn_before?: string | null;
    readonly created_time: string;
    readonly updated_time: string;
    deleted_time?: string | null;
    archived_time?: string | null;
    voided_at?: string | null;
    /**
     * ex: Reason provided by the signer during declining
     */
    decline_reason?: string | null;
    /**
     * Will store the auto-expiry message or the reason provided by user when voiding manually
     */
    void_reason?: string | null;
    audit_log_doc?: string | null;
    id_doc?: string | null;
    workspace: number;
    updated_by?: number | null;
};

