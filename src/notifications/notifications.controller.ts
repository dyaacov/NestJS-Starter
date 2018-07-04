
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { NotificationsService } from './notifications.service'

@Controller('api/v1/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @Post('/email')
  async email(@Body() entity, @Req() request) {
    const { to, subject, html } = entity
    return await this.notificationsService.sendEmail('from', to, subject, html)
  }

  @Post('/sms')
  async sms(@Body() entity, @Req() request) {
    const { to, body } = entity
    return await this.notificationsService.sendSMS(to, body)
  }
}
