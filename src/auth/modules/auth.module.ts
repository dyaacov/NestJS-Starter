import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthController } from '../controllers/auth.controller'
import { AuthService } from '../services/auth.service'
import { UsersModule } from '../../users/modules/users.module';

@Module({
  imports: [UsersModule],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
