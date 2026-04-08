/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionRunError } from './ExtensionRunError';
import type { ExtensionRunResult } from './ExtensionRunResult';

export type ExtensionRunResponse = {
    results: Array<ExtensionRunResult>;
    errors: Array<ExtensionRunError>;
};

