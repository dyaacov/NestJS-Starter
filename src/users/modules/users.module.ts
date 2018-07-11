import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersService, UsersModel, UsersController } from '..'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UsersModel }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
