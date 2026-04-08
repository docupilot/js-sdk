/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtensionRunHistory = {
    readonly user_id: number | null;
    data?: Record<string, any>;
    readonly started_on: string;
    readonly ended_on: string;
    status?: 'queued' | 'in_progress' | 'success' | 'partial_success' | 'failed';
    request_id?: string | null;
    origin?: string | null;
};

