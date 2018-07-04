
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signin')
  async signin(@Body() entity, @Req() request) {
    return await this.authService.auth(entity)
  }

  @Post()
  async create(@Body() entity, @Req() request) {
    return await this.authService.create(entity)
  }

  @Get()
  async findAll(@Req() request) {
    return await this.authService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id, @Req() request) {
    return await this.authService.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() entity, @Req() request) {
    return await this.authService.update(id, entity)
  }

  @Delete(':id')
  async remove(@Param('id') id, @Req() request) {
    return await this.authService.remove(id)
  }
}
