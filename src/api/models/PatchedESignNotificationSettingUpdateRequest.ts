/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedESignNotificationSettingUpdateRequest = {
    notification_key?: 'notify_signer_on_invitation_to_sign' | 'notify_signer_on_reminder_emails' | 'notify_signer_on_envelope_completed' | 'notify_signer_on_envelope_voided' | 'notify_signer_on_expiry_warning' | 'notify_sender_on_invitation_sent' | 'notify_sender_on_envelope_signed' | 'notify_sender_on_envelope_completed' | 'notify_sender_on_envelope_declined' | 'notify_cc_on_envelope_signed' | 'notify_cc_on_envelope_completed' | 'notify_cc_on_envelope_declined' | 'notify_cc_on_envelope_voided';
    is_enabled?: boolean;
};

