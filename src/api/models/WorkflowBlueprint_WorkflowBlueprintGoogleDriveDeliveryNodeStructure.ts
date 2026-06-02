/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryConfigStructure';
import type { WorkflowBlueprint_WorkflowBlueprintInputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintInputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintOutputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintOutputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';

export type WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    input_ports?: Array<WorkflowBlueprint_WorkflowBlueprintInputPortStructure>;
    output_ports?: Array<WorkflowBlueprint_WorkflowBlueprintOutputPortStructure>;
    type: 'google_drive_delivery';
    config: WorkflowBlueprint_WorkflowBlueprintGoogleDriveDeliveryConfigStructure;
};

