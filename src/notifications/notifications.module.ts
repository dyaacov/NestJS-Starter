import { Module } from '@nestjs/common'
import { NotificationsController } from './notifications.controller'
import { SMSService } from './sms.service'
import { EmailService } from './email.service'

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [SMSService, EmailService],
})
export class NotificationsModule { }
