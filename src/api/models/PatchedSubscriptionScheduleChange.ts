/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedSubscriptionScheduleChange = {
    readonly id?: number;
    readonly plan?: string;
    credit_addon?: number;
    user_seat_addon?: number;
    readonly created_on?: string;
    readonly scheduled_on?: string;
    status?: 'applied' | 'pending' | 'cancelled';
    readonly change_type?: 'no_action' | 'first_time_purchase' | 'term_upgrade' | 'plan_upgrade' | 'addon_upgrade' | 'term_upgrade_with_plan_upgrade' | 'term_upgrade_with_addon_upgrade' | 'plan_upgrade_with_addon_upgrade' | 'term_upgrade_with_plan_upgrade_and_addon_upgrade' | 'term_downgrade' | 'plan_downgrade' | 'addon_downgrade' | 'term_upgrade_with_plan_downgrade' | 'term_downgrade_with_plan_upgrade' | 'term_downgrade_with_plan_downgrade' | 'term_upgrade_with_addon_downgrade' | 'term_downgrade_with_addon_upgrade' | 'term_downgrade_with_addon_downgrade' | 'plan_upgrade_with_addon_downgrade' | 'plan_downgrade_with_addon_upgrade' | 'plan_downgrade_with_addon_downgrade' | 'addon_upgrade_with_addon_downgrade' | 'term_upgrade_with_plan_upgrade_and_addon_downgrade' | 'term_upgrade_with_plan_downgrade_and_addon_upgrade' | 'term_upgrade_with_plan_downgrade_and_addon_downgrade' | 'term_downgrade_with_plan_upgrade_and_addon_upgrade' | 'term_downgrade_with_plan_upgrade_and_addon_downgrade' | 'term_downgrade_with_plan_downgrade_and_addon_upgrade' | 'term_downgrade_with_plan_downgrade_and_addon_downgrade' | 'term_upgrade_with_addon_upgrade_and_addon_downgrade' | 'term_downgrade_with_addon_upgrade_and_addon_downgrade' | 'plan_upgrade_with_addon_upgrade_and_addon_downgrade' | 'plan_downgrade_with_addon_upgrade_and_addon_downgrade' | 'term_upgrade_with_plan_upgrade_and_addon_upgrade_and_addon_downgrade' | 'term_upgrade_with_plan_downgrade_and_addon_upgrade_and_addon_downgrade' | 'term_downgrade_with_plan_upgrade_and_addon_upgrade_and_addon_downgrade' | 'term_downgrade_with_plan_downgrade_and_addon_upgrade_and_addon_downgrade' | 'cancellation' | 'subscription_renewal';
};

