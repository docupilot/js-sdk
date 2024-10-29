/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OneDriveDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'one_drive';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    folder?: string;
};

