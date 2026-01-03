/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FromEmailAccount } from './FromEmailAccount';

export type PatchedESignSettings = {
    readonly email_account?: FromEmailAccount;
    /**
     * Number of days until envelope expires
     */
    expiry?: number;
    /**
     * Number of days before first reminder is sent
     */
    first_reminder?: number | null;
    /**
     * Number of days between reminders
     */
    reminder_frequency?: number | null;
    /**
     * Number of days before expiry to send warning
     */
    warn_before?: number;
};

