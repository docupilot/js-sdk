/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DropboxDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'dropbox';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    readonly created_time: string | null;
    readonly updated_time: string | null;
    folder?: string;
    mode?: 'add_as_new' | 'conflict' | 'overwrite';
};

