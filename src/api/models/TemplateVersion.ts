/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TemplateVersion = {
    readonly id: number;
    name?: string | null;
    version_type?: 'major' | 'minor' | null;
    starred?: boolean;
    live?: boolean;
    readonly created_time: string;
    readonly created_by_user_name: string;
};

