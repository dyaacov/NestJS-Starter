import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from '../auth/modules/auth.module'
import { AuthGuard } from '../auth'
import { UsersModule } from '../users/modules/users.module'
import { APP_GUARD } from '@nestjs/core';
import { NotificationsModule } from '../notifications/modules/notifications.module';
import { AuditsModule } from '../audits/modules/audits.module';

@Module({
  imports: [UsersModule, AuthModule, NotificationsModule, AuditsModule, MongooseModule.forRoot(`${process.env.DATABASE_URL}`, { useNewUrlParser: true })],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ],
  exports: [AuthModule]
})
export class ApplicationModule { }