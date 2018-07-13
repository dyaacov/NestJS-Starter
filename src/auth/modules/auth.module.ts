import { Module } from '@nestjs/common'
import { AuthController, AuthService } from '..'
import { UsersModule } from '../../users/modules/users.module';

@Module({
  imports: [UsersModule],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
