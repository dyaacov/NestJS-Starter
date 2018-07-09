import { Injectable } from "@nestjs/common";
const client = require('@sendgrid/mail')
client.setApiKey(process.env.SENDGRID_API_KEY)

@Injectable()
export class EmailClient {
    async send(data) {

    }
}