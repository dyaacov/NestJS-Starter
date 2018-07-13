
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { UsersService, ChangePasswordValidator } from '..'
import { JoiValidationPipe } from '../../core';

@Controller('api/v1/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { console.log('#UsersController#') }

  @Post()
  async create(@Body() body, @Req() request) {
    return await this.usersService.create(body)
  }

  @Get()
  async findAll(@Req() request) {
    return await this.usersService.findAll(request.params)
  }

  @Get(':id')
  async findOne(@Param('id') id, @Req() request) {
    return await this.usersService.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body, @Req() request) {
    return await this.usersService.update(id, body)
  }

  @Delete(':id')
  async remove(@Param('id') id, @Req() request) {
    return await this.usersService.remove(id)
  }

  @Post()
  async forgotPassword(@Body() body, @Req() request) {
    const { email } = body
    return await this.usersService.forgotPassword(email)
  }

  @Put('/password')
  async changePassword(@Body(new JoiValidationPipe(ChangePasswordValidator)) body, @Req() request) {
    const { oldPassword, newPassword } = body
    return await this.usersService.changePassword(request.user.id, oldPassword, newPassword)
  }
}
