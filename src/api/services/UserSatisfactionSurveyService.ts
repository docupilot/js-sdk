/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NpsNextReminder } from '../models/NpsNextReminder';
import type { NpsRating } from '../models/NpsRating';
import type { SaveUserFeedback } from '../models/SaveUserFeedback';
import type { SurveyPrompt } from '../models/SurveyPrompt';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
import type { OmitReadonly } from '../core/utils/OmitReadonly';

export class UserSatisfactionSurveyService {

    /**
     * Redirect to G2 Review Page
     * @returns void
     * @throws ApiError
     */
    public static g2Review(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/user_satisfaction_survey/g2_review/',
            errors: {
                302: `No response body`,
            },
        });
    }

    /**
     * Update the next NPS reminder time
     * @returns void
     * @throws ApiError
     */
    public static npsNextReminder({
        requestBody,
    }: {
        requestBody: OmitReadonly<NpsNextReminder>,
    }): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/user_satisfaction_survey/nps_next_reminder/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update NPS rating
     * @returns void
     * @throws ApiError
     */
    public static npsRating({
        requestBody,
    }: {
        requestBody?: OmitReadonly<NpsRating>,
    }): CancelablePromise<void> {
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
     * @returns SurveyPrompt
     * @throws ApiError
     */
    public static showSurveyPrompt(): CancelablePromise<SurveyPrompt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/v2/user_satisfaction_survey/show_survey_prompt/',
        });
    }

    /**
     * Update g2_review_updated_on
     * @returns void
     * @throws ApiError
     */
    public static updateG2ReviewUpdatedOn(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accounts/v2/user_satisfaction_survey/update_g2_review_updated_on/',
        });
    }

}
