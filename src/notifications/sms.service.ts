
import { Injectable } from '@nestjs/common'

@Injectable()
export class SMSService {
  send(to, body) {
    if (!to) {
      console.error('no to supplied')
      throw new Error('No \'to\' supplied')
    } else if (!body) {
      console.error('no body supplied')
      throw new Error('No \'body\' supplied')
    }

    console.info('ok, will send the message')
    const smsData = {
      to,
      body,
      from: 'smsConfig.phoneNumber',
    }
    console.log('sms sent!')
    //return twilioClient.messages.create(smsData)
  }


}