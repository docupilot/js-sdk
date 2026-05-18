/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnvelopeBulkMove = {
    envelope_ids?: Array<number>;
    is_move_all?: boolean;
    status?: 'created' | 'pending' | 'voided' | 'declined' | 'completed' | 'waiting_for_me';
    folder_id?: number;
    new_folder_id: number | null;
};

