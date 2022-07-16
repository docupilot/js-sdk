/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folder } from '../models/Folder';
import { request as __request } from '../core/request';

export class FoldersService {

    /**
     * Get list of folders
     * @returns Folder
     * @throws ApiError
     */
    public static async listFolders({
        ordering,
    }: {
        /** Which field to use when ordering the results. **/
        ordering?: string,
    }): Promise<Array<Folder>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v2/folders/`,
            query: {
                'ordering': ordering,
            },
        });
        return result.body;
    }

    /**
     * Create a folder
     * @returns Folder
     * @throws ApiError
     */
    public static async createFolder({
        requestBody,
    }: {
        requestBody: Folder,
    }): Promise<Folder> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/folders/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Updates a folder
     * @returns Folder
     * @throws ApiError
     */
    public static async updateFolder({
        id,
        requestBody,
    }: {
        /** A unique integer value identifying this folder. **/
        id: number,
        requestBody: Folder,
    }): Promise<Folder> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v2/folders/${id}/`,
            body: requestBody,
        });
        return result.body;
    }

    /**
     * Delete a folder.
     * This operation moves all templates under this folder to home directory.
     * @returns any No response body
     * @throws ApiError
     */
    public static async deleteFolder({
        id,
    }: {
        /** A unique integer value identifying this folder. **/
        id: number,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v2/folders/${id}/`,
        });
        return result.body;
    }

}