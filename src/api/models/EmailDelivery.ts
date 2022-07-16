/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { File } from './File';

export type EmailDelivery = {
    readonly id: number;
    readonly attachments: Array<File>;
    name: string;
    type?: 'email';
    from_email: string;
    to_email: Array<string>;
    cc?: Array<string> | null;
    bcc?: Array<string> | null;
    headers?: Record<string, any> | null;
    subject?: string;
    body?: string;
};

