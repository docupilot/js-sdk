/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnvelopeAttachment = {
    readonly id: number;
    /**
     * Name of the attachment
     */
    readonly name: string;
    readonly attachment: string;
    /**
     * Timestamp when the file was uploaded
     */
    readonly created_at: string;
    /**
     * Envelope recipient who uploaded the attachment
     */
    readonly uploaded_by: number;
    readonly field_label: string;
    readonly uploaded_by_name: string;
    readonly uploaded_by_email: string;
};

