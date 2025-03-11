/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HubspotAssociation } from './HubspotAssociation';
import type { HubspotProperty } from './HubspotProperty';

export type HubspotModuleSchema = {
    module_type_id: string;
    readonly properties: Array<HubspotProperty>;
    readonly associations: Array<HubspotAssociation>;
};

