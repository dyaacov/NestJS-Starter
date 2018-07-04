
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() entity, @Req() request) {
    return await this.usersService.create(entity)
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
  async update(@Param('id') id, @Body() entity, @Req() request) {
    return await this.usersService.update(id, entity)
  }

  @Delete(':id')
  async remove(@Param('id') id, @Req() request) {
    return await this.usersService.remove(id)
  }
}
