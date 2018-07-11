
import * as jwt from 'jsonwebtoken';
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../../users/services/users.service';
const secretKey = 'secretKey'

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) { }

  async verify(token) {
    console.log('verifing token', token)
    if (!token) {
      throw new UnauthorizedException('Invalid token provided.')
    }
    return jwt.verify(token, secretKey, (err, decoded) => {
      console.log('inside jwt.verify.')
      if (err) {
        console.log('error in verifying the token', err)
        throw new UnauthorizedException('Invalid token provided.')
      }

      console.log('user', decoded)
      return Promise.resolve(decoded)
    })
  }

  async auth(username: string, password: string) {
    const user = await this.usersService.auth(username, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    console.log(user)
    return jwt.sign(JSON.stringify(user), secretKey)
  }
}