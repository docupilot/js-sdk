/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryConfigStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPortStructure } from './WorkflowBlueprint_WorkflowBlueprintPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';

export type WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    ports: Array<WorkflowBlueprint_WorkflowBlueprintPortStructure>;
    type: 'google_drive_delivery';
    config: WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryConfigStructure;
};

