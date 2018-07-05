
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { SMSService } from './sms.service'
import { EmailService } from './email.service'

@Controller('api/v1/notifications')
export class NotificationsController {
  constructor(private readonly emailService: EmailService,
    private readonly smsService: SMSService) { }

  @Post('/email')
  async email(@Body() entity, @Req() request) {
    const { to, subject, html } = entity
    return await this.emailService.send('from', to, subject, html)
  }

  @Post('/sms')
  async sms(@Body() entity, @Req() request) {
    const { to, body } = entity
    return await this.smsService.send(to, body)
  }
}
