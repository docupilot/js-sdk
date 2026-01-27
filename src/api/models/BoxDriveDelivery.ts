/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BoxDriveDelivery = {
    readonly id: number;
    failure_email_recipients?: string | null;
    account: number;
    name: string;
    type?: 'box_drive';
    success_callback_url?: string | null;
    success_callback_payload?: Record<string, any> | null;
    success_callback_headers?: Record<string, any> | null;
    last_used_on?: string | null;
    readonly created_time: string | null;
    readonly updated_time: string | null;
    folder?: string;
    folder_id?: string | null;
};

