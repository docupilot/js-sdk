/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NpsNextReminder } from '../models/NpsNextReminder';
import type { NpsRating } from '../models/NpsRating';
import type { SaveUserFeedback } from '../models/SaveUserFeedback';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import { OmitReadonly } from '../core/utils/OmitReadonly';

export class UserSatisfactionSurveyService {

    /**
     * Nps next reminder
     * @returns any No response body
     * @throws ApiError
     */
    public static npsNextReminder({
        requestBody,
    }: {
        requestBody: OmitReadonly<NpsNextReminder>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/user_satisfaction_survey/nps_next_reminder/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Nps rating
     * @returns any No response body
     * @throws ApiError
     */
    public static npsRating({
        requestBody,
    }: {
        requestBody?: OmitReadonly<NpsRating>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/user_satisfaction_survey/nps_rating/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Save user feedback
     * @returns SaveUserFeedback
     * @throws ApiError
     */
    public static saveUserFeedback({
        requestBody,
    }: {
        requestBody: Array<SaveUserFeedback>,
    }): CancelablePromise<SaveUserFeedback> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/user_satisfaction_survey/save_user_feedback/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Show survey prompt
     * @returns any
     * @throws ApiError
     */
    public static showSurveyPrompt(): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/user_satisfaction_survey/show_survey_prompt/',
        });
    }

    /**
     * Update g3_review_updated_on
     * @returns any No response body
     * @throws ApiError
     */
    public static updateG3ReviewUpdatedOn(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/user_satisfaction_survey/update_g2_review_updated_on/',
        });
    }

}
