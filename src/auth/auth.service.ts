
import * as jwt from 'jsonwebtoken';
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service';
const secretKey = 'secretKey'

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) { }

  verify(token) {
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
  
      console.log('done')
      return Promise.resolve(decoded)
    })
  }
  
  auth(entity) {
    const user = this.usersService.auth(entity)
    if (!user) {
      throw new UnauthorizedException()
    }
    return jwt.sign(user, secretKey)
  }
}