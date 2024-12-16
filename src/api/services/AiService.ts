/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AITemplateCreate } from '../models/AITemplateCreate';
import type { AITemplateEdit } from '../models/AITemplateEdit';
import type { PromptSuggestions } from '../models/PromptSuggestions';
import type { Template } from '../models/Template';
import type { WordAddInAllCategory } from '../models/WordAddInAllCategory';
import type { WordErrorSuggestions } from '../models/WordErrorSuggestions';
import type { WordPromptSuggestions } from '../models/WordPromptSuggestions';

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
    public static createTemplateOnlineBuilderAi({
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
     * Word Error Suggestions
     * @returns WordErrorSuggestions
     * @throws ApiError
     */
    public static wordErrorSuggestions({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordErrorSuggestions>,
    }): CancelablePromise<WordErrorSuggestions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/word_error_suggestions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Word group category chat completion
     * @returns WordAddInAllCategory
     * @throws ApiError
     */
    public static wordGroupCategoryChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddInAllCategory>,
    }): CancelablePromise<WordAddInAllCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/word_group_category/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list prompt suggestions based on File Name and Content
     * @returns WordPromptSuggestions
     * @throws ApiError
     */
    public static wordPromptSuggestions({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordPromptSuggestions>,
    }): CancelablePromise<WordPromptSuggestions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/word_prompt_suggestions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Word table category chat completion
     * @returns WordAddInAllCategory
     * @throws ApiError
     */
    public static wordTableCategoryChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddInAllCategory>,
    }): CancelablePromise<WordAddInAllCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/word_table_category/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Word text category chat completion
     * @returns WordAddInAllCategory
     * @throws ApiError
     */
    public static wordTextCategoryChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddInAllCategory>,
    }): CancelablePromise<WordAddInAllCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/word_text_category/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
