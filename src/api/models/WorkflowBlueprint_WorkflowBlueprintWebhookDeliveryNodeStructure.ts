/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintPortStructure } from './WorkflowBlueprint_WorkflowBlueprintPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';
import type { WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryConfigStructure';

export type WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    ports: Array<WorkflowBlueprint_WorkflowBlueprintPortStructure>;
    type: 'webhook_delivery';
    config: WorkflowBlueprint_WorkflowBlueprintWebhookDeliveryConfigStructure;
};

