/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChargebeeSubscription = {
    readonly plan_id: string | null;
    readonly status: 'a' | 't' | 'e' | 'c' | 'p';
    readonly trial_end: string;
    readonly billing_period_unit: string | null;
    readonly current_term_start: string | null;
    readonly current_term_end: string | null;
    readonly unpaid_invoices: number;
    readonly max_allowed_unpaid_invoices: number;
    /**
     * Determine whether the trial period can be extended.
     *
     * This property checks the current status and conditions of the subscription
     * to determine if the trial period is eligible for an extension.
     *
     * Returns:
     * bool: True if the trial can be extended based on the current subscription
     * conditions, otherwise False.
     */
    readonly can_extend_trial: boolean;
    readonly subscribed_on: string;
    readonly documents_allowed: number;
    readonly trial_signatures_allowed: number;
    readonly signatures_allowed: number;
    readonly signnow_credits_allowed: number;
};

