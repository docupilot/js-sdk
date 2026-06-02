/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintConvertConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintConvertConfigStructure';
import type { WorkflowBlueprint_WorkflowBlueprintInputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintInputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintOutputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintOutputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';

export type WorkflowBlueprint_WorkflowBlueprintConvertNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    input_ports?: Array<WorkflowBlueprint_WorkflowBlueprintInputPortStructure>;
    output_ports?: Array<WorkflowBlueprint_WorkflowBlueprintOutputPortStructure>;
    type: 'convert';
    config: WorkflowBlueprint_WorkflowBlueprintConvertConfigStructure;
};

