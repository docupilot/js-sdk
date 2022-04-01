/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateSettings } from './TemplateSettings';

/**
 * Adds support for write once fields to serializers.
 * Write value only in `post` and not allow the field to be updated in `put/patch` requests.
 *
 * To use it, specify a list of fields as `write_once_fields` on the serializer's Meta:
 * ```
 * class Meta:
 * model = SomeModel
 * fields = '__all__'
 * write_once_fields = ('collection', )
 * ```
 *
 * Now the fields in `write_once_fields` can be set during POST (create),
 * but cannot be changed afterwards via PUT or PATCH (update).
 * Inspired by https://stackoverflow.com/a/37487134/627411.
 * Taken from https://blog.qax.io/write-once-fields-with-django-rest-framework/
 */
export type Template = {
    readonly id: number;
    uploaded_file: number;
    preferences?: TemplateSettings;
    title: string;
    description?: string | null;
    type: Template.type;
    readonly created_time: string;
    document_status?: Template.document_status;
    deleted_time?: string | null;
    folder?: number | null;
}

export namespace Template {

    export enum type {
        DOCX = 'docx',
        HTML = 'html',
        FILLABLE_PDF = 'fillable_pdf',
        PPTX = 'pptx',
        XLSX = 'xlsx',
        G_DOCUMENT = 'g_document',
        G_PRESENTATION = 'g_presentation',
        G_SPREADSHEET = 'g_spreadsheet',
    }

    export enum document_status {
        ACTIVE = 'active',
        TEST = 'test',
    }


}
