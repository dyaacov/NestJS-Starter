
import { Injectable } from '@nestjs/common'

@Injectable()
export class NotificationsService {

  sendSMS(to, body) {
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
    //return twilioClient.messages.create(smsData)
  }

  sendEmail(from, to, subject, html) {
    return []
  }
}