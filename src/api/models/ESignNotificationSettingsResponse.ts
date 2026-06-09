/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ESignNotificationSettingsResponse = {
    notify_signer_on_invitation_to_sign: boolean;
    notify_signer_on_envelope_completed: boolean;
    notify_signer_on_envelope_voided: boolean;
    notify_sender_on_invitation_sent: boolean;
    notify_sender_on_envelope_signed: boolean;
    notify_sender_on_envelope_completed: boolean;
    notify_sender_on_envelope_declined: boolean;
    notify_cc_on_envelope_signed: boolean;
    notify_cc_on_envelope_completed: boolean;
    notify_cc_on_envelope_declined: boolean;
    notify_cc_on_envelope_voided: boolean;
};

