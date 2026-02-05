/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrganizationDemographic = {
    readonly id: number;
    domain_name?: string | null;
    employee_count: 'JUST ME' | '2 to 5' | '6 to 10' | '11 to 25' | '26 to 50' | '51 to 200' | '201 to 1,000' | '1,001 to 10,000' | '10,001 or more';
    industry: string;
    primary_region: string;
};

