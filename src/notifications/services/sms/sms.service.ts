
import { Injectable } from '@nestjs/common'
import { SMSClient } from './sms.client';

@Injectable()
export class SMSService {
  constructor(private readonly client: SMSClient) { console.log('### SMSService ###', client) }

  send(smsObject) {
    this.client.send(smsObject)
  }


}