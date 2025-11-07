/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocuSignFolderOwner } from './DocuSignFolderOwner';

export type DocuSignFolder = {
    name: string;
    type: string;
    owner: DocuSignFolderOwner;
    folderId: string;
    uri: string;
    itemCount: string;
    hasSubFolders: string;
};

