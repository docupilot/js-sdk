/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GoogleDriveDelivery = {
    readonly id: number;
    account?: number | null;
    name: string;
    type?: 'google_drive';
    folder?: string;
    folder_id?: string | null;
};

