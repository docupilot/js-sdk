/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Plan = {
    readonly plan_id: string;
    readonly documents_allowed: number;
    readonly price: number;
    readonly billing_period_unit: Plan.billing_period_unit;
}

export namespace Plan {

    export enum billing_period_unit {
        YEAR = 'year',
        MONTH = 'month',
    }


}
