/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnvelopeAttachment } from './EnvelopeAttachment';

export type PaginatedEnvelopeAttachmentList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<EnvelopeAttachment>;
};

