/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChildDocumentMergeHistory = {
    readonly id: number;
    delivery_type: string;
    status: 'pending' | 'success' | 'error';
    message?: Record<string, any> | null;
    delivery?: number | null;
};

