import { Module } from '@nestjs/common'
import { NotificationsController, SMSService, EmailService, EmailClient, SMSClient } from '../'

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [SMSService, EmailService, EmailClient, SMSClient],
})
export class NotificationsModule { }
