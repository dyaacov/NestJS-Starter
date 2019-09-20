
import { Post, Body, Req, Controller, ConflictException } from '@nestjs/common'
import { AuthService } from '../../auth'
import { UsersService, Utils } from '../../users';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signin')
  async register(@Body() body, @Req() request) {
    const { username, password } = body
    return await this.authService.auth(username, password)
  }
}
