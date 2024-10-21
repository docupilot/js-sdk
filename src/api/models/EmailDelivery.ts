/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { File } from './File';

export type EmailDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number | null;
    readonly attachments: Array<File>;
    name: string;
    type?: 'email';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    from_email?: string | null;
    to_email: Array<string>;
    cc?: Array<string>;
    bcc?: Array<string>;
    headers?: Record<string, any> | null;
    subject?: string;
    body?: string;
    enable_optional_recipients?: boolean;
};

