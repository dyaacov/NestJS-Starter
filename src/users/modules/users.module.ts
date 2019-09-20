import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersService, UsersModel, UsersController } from '..'
import { UsersPublicController } from '../controllers/users.public.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersModel }])],
  controllers: [UsersController, UsersPublicController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
