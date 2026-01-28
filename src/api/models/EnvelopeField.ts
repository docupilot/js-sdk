/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnvelopeField = {
    readonly id: number;
    readonly sn_field_id: string | null;
    type: 'eText' | 'eInitials' | 'eDate' | 'eSignedDate' | 'eDropDown' | 'eCheckBox' | 'eSignature' | 'eAttachments';
    'x': number;
    'y': number;
    required?: boolean;
    width: number;
    height: number;
    page_number: number;
    field_name?: string | null;
    label?: string | null;
    default_value?: string | null;
    config?: Record<string, any> | null;
    recipient_color?: string | null;
    text_color?: string | null;
    readonly created_at: string;
    readonly updated_at: string;
    readonly envelope: number;
    readonly document: number;
    readonly recipient: number;
    readonly created_by: number;
    readonly updated_by: number | null;
};

