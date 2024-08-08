/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserPersonalizationListViewTemplate } from './UserPersonalizationListViewTemplate';

export type UserPersonalization = {
    ui_version?: 1 | 2;
    'list_view:templates'?: UserPersonalizationListViewTemplate;
    'tp:freshchat:restoreId'?: string;
};

