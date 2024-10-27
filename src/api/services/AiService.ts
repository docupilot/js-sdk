/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AITemplateCreate } from '../models/AITemplateCreate';
import type { AITemplateEdit } from '../models/AITemplateEdit';
import type { PromptSuggestions } from '../models/PromptSuggestions';
import type { Template } from '../models/Template';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class AiService {

    /**
     * create template using ai
     * @returns Template
     * @throws ApiError
     */
    public static createTemplateUsingUi({
        requestBody,
    }: {
        requestBody: OmitReadonly<AITemplateCreate>,
    }): CancelablePromise<Template> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/online-builder/create_template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * edit template using chat completion
     * @returns AITemplateEdit
     * @throws ApiError
     */
    public static editTemplateChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<AITemplateEdit>,
    }): CancelablePromise<AITemplateEdit> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/online-builder/edit_template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list prompt suggestions based on template name and description
     * @returns PromptSuggestions
     * @throws ApiError
     */
    public static listPromptSuggestions({
        requestBody,
    }: {
        requestBody: OmitReadonly<PromptSuggestions>,
    }): CancelablePromise<PromptSuggestions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/online-builder/list_prompt_suggestions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
