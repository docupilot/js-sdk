/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChargebeeSubscription = {
    plan_id?: string | null;
    billing_period_unit?: string | null;
    readonly current_term_start: string;
    readonly current_term_end: string;
    documents_allowed?: number;
    documents_created?: number;
}
