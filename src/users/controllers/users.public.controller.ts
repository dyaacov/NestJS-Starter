
import { Get, Post, Delete, Put, Body, Param, Req, Controller, ConflictException } from '@nestjs/common'
import { UsersService, ChangePasswordValidator } from '..'
import { Utils } from '../../core';

@Controller('/user')
export class UsersPublicController {
  constructor(private readonly usersService: UsersService) { console.log('#UsersController#') }

  @Post('/register')
  async signin(@Body() body, @Req() request) {
    const { username, password } = body
    const user = await this.usersService.find({ username })
    if (user) {
      throw new ConflictException('User already exists')
    }
    const hashedNewPassword = Utils.hashPassword(password)
    return await this.usersService.create({ username, hash: hashedNewPassword })
  }
}
