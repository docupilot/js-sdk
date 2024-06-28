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
    last_used_on?: string | null;
    folder?: string;
    mode?: 'add_as_new' | 'conflict' | 'overwrite';
};

