
import { Injectable } from '@nestjs/common'
import { SMSClient } from './sms.client';

@Injectable()
export class SMSService {
  constructor(private readonly client: SMSClient) { }

  send(smsObject) {
    this.client.send(smsObject)
  }
}