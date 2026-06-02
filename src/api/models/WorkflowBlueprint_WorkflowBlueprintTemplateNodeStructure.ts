/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkflowBlueprint_WorkflowBlueprintInputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintInputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintOutputPortStructure } from './WorkflowBlueprint_WorkflowBlueprintOutputPortStructure';
import type { WorkflowBlueprint_WorkflowBlueprintPositionStructure } from './WorkflowBlueprint_WorkflowBlueprintPositionStructure';
import type { WorkflowBlueprint_WorkflowBlueprintTemplateConfigStructure } from './WorkflowBlueprint_WorkflowBlueprintTemplateConfigStructure';

export type WorkflowBlueprint_WorkflowBlueprintTemplateNodeStructure = {
    id: string;
    name: string;
    position: WorkflowBlueprint_WorkflowBlueprintPositionStructure;
    input_ports?: Array<WorkflowBlueprint_WorkflowBlueprintInputPortStructure>;
    output_ports?: Array<WorkflowBlueprint_WorkflowBlueprintOutputPortStructure>;
    type: 'template';
    config: WorkflowBlueprint_WorkflowBlueprintTemplateConfigStructure;
};

