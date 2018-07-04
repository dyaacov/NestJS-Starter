import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';

@Module({
    imports: [AuthModule, UsersModule],
    providers: [
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
})
export class ApplicationModule { }