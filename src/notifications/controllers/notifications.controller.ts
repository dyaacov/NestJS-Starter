
import { Post, Body, Req, Controller } from '@nestjs/common'
import { EmailService, SMSService } from '..'

@Controller('api/v1/notification')
export class NotificationsController {
  constructor(private readonly emailService: EmailService) { }

  @Post('/email')
  async email(@Body() entity, @Req() request) {
    entity.from = 'me'
    return await this.emailService.send(entity)
  }

  @Post('/sms')
  async sms(@Body() entity, @Req() request) {
    //return await this.smsService.send(entity)
  }
}
