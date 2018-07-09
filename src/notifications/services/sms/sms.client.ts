import { Injectable } from "@nestjs/common";

@Injectable()
export class SMSClient {
    async send(data) {
        //return twilioClient.messages.create(smsData)
    }
}