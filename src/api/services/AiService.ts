/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AITemplateCreate } from '../models/AITemplateCreate';
import type { AITemplateEdit } from '../models/AITemplateEdit';
import type { PromptSuggestions } from '../models/PromptSuggestions';
import type { SyntaxSuggestions } from '../models/SyntaxSuggestions';
import type { Template } from '../models/Template';
import type { WordAddIn } from '../models/WordAddIn';
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
     * Word group chat completion
     * @returns WordAddIn
     * @throws ApiError
     */
    public static wordGroupChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddIn>,
    }): CancelablePromise<WordAddIn> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/group_completion/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * list prompt suggestions based on File Name and Content
     * @returns WordPromptSuggestions
     * @throws ApiError
     */
    public static promptSuggestionsWordAddInAi({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordPromptSuggestions>,
    }): CancelablePromise<WordPromptSuggestions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/list_prompt_suggestions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Syntax suggestions from error
     * @returns SyntaxSuggestions
     * @throws ApiError
     */
    public static syntaxSuggestionsFromError({
        requestBody,
    }: {
        requestBody: OmitReadonly<SyntaxSuggestions>,
    }): CancelablePromise<SyntaxSuggestions> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/syntax_suggestions/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Word table chat completion
     * @returns WordAddIn
     * @throws ApiError
     */
    public static wordTableChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddIn>,
    }): CancelablePromise<WordAddIn> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/table_completion/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Word text chat completion
     * @returns WordAddIn
     * @throws ApiError
     */
    public static wordTextChatCompletion({
        requestBody,
    }: {
        requestBody: OmitReadonly<WordAddIn>,
    }): CancelablePromise<WordAddIn> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai/word-add-in/text_completion/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
