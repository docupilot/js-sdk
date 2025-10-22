/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvelopeRecipient } from './EnvelopeRecipient';

export type PaginatedEnvelopeRecipientList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<EnvelopeRecipient>;
};

