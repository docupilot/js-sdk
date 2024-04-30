/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SmtpCredentials = {
    email: string;
    smtp_server_address: string;
    smtp_server_username: string;
    smtp_server_password: string;
    smtp_port: number;
    smtp_encryption_type: 'TLS' | 'SSL';
};

