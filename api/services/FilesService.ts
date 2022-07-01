/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class FilesService {

    /**
     * @param requestBody
     * @returns File
     * @throws ApiError
     */
    public static async uploadTemplate(
        requestBody?: any,
    ): Promise<Blob> {
        const result = await __request({
            method: 'POST',
            path: `/api/v2/files/upload_template/`,
            body: requestBody,
        });
        return result.body;
    }

}