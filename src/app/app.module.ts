import { Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/modules/notifications.module';

@Module({
  imports: [NotificationsModule],
})
export class ApplicationModule { }