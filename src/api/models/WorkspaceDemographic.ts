/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkspaceDemographic = {
    readonly id: number;
    domain_name: string;
    employee_count: '1-10' | '11-15' | '51-200' | '201-500' | '501-1000' | '1001-5000' | '5001-10000' | '10000+';
    industry: string;
    primary_region: string;
};

