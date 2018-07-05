
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('api/v1/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() body, @Req() request) {
    return await this.usersService.create(body)
  }

  @Post('/activate')
  async activate(@Body() body, @Req() request) {
    //return await this.usersService.activate()
  }

  @Post('/resetPassword')
  async resetPassword(@Body() body, @Req() request) {
    //return await this.usersService.resetPassword(entity)
  }

  @Put('/changePassword')
  async changePassword(@Body() body, @Req() request) {
    const { oldPassword, newPassword } = body
    return await this.usersService.changePassword('id', oldPassword, newPassword)
  }

  @Get()
  async findAll(@Req() request) {
    return await this.usersService.findAll()
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
}
