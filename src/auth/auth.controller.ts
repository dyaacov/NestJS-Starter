
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signin')
  async signin(@Body() entity, @Req() request) {
    return await this.authService.auth(entity)
  }

}