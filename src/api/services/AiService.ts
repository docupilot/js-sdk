/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AITemplateCreate } from '../models/AITemplateCreate';
import type { AITemplateEdit } from '../models/AITemplateEdit';
import type { PromptSuggestions } from '../models/PromptSuggestions';
import type { WordAddInPromptSuggestions } from '../models/WordAddInPromptSuggestions';
import type { WordAddInTemplateEdit } from '../models/WordAddInTemplateEdit';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class AiService {

    /**
     * create template using ai
     * @returns AITemplateCreate
     * @throws ApiError
     */
    public static createTemplateOnlineBuilderAi({
        requestBody,
    }: {
        requestBody: OmitReadonly<AITemplateCreate>,
    }): CancelablePromise<AITemplateCreate> {
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
    public static editTemplateOnlineBuilderAi({
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
    public static promptSuggestionsOnlineBuilderAi({
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

    /**
     * Edit word template using ai
     * @returns WordAddInTemplateEdit
     * @throws ApiError
     */
    public static editWordTemplateUsingAi({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddInTemplateEdit>,
    }): CancelablePromise<WordAddInTemplateEdit> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/edit_template/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list prompt suggestions based on File Name and Content
     * @returns WordAddInPromptSuggestions
     * @throws ApiError
     */
    public static promptSuggestionsWordAddInAi({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddInPromptSuggestions>,
    }): CancelablePromise<WordAddInPromptSuggestions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/list_prompt_suggestions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
