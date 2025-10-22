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
    status?: 'created' | 'pending' | 'voided' | 'declined' | 'completed' | 'waiting_for_me';
    cc?: Array<string>;
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
    readonly created_at: string;
    readonly updated_at: string;
    readonly completed_at: string;
    deleted_at?: string | null;
    archived_at?: string | null;
    declined_at?: string | null;
    voided_at?: string | null;
    /**
     * ex: Reason for Declining or Voiding provided by signer or sender respectively
     */
    reason?: string | null;
    audit_log_doc?: string | null;
    source?: 1 | 2;
    workspace: number;
    sender: number;
    voided_by?: number | null;
    updated_by?: number | null;
    folder?: number | null;
};

