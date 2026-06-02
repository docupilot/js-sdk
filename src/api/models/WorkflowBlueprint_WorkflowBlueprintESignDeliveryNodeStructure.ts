/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintESignDeliveryConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintESignDeliveryConfigStructure';
import type { WorkflowBlueprint_WorkflowBlueprintInputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintInputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintOutputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintOutputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';

export type WorkflowBlueprint_WorkflowBlueprintESignDeliveryNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    input_ports?: Array<WorkflowBlueprint_WorkflowBlueprintInputPortStructure>;
    output_ports?: Array<WorkflowBlueprint_WorkflowBlueprintOutputPortStructure>;
    type: 'esign_delivery';
    config: WorkflowBlueprint_WorkflowBlueprintESignDeliveryConfigStructure;
};

