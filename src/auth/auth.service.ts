
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

  constructor(private readonly usersService: UsersService) { }

  verify(token) {
    console.log('verifing token', token)
    return token //TODO verify!
  }
  auth(entity) {
    const user = this.usersService.auth(entity)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
  create(entity) {
    return entity
  }

  findAll() {
    return []
  }

  findOne(id) {
    return {}
  }

  update(id, entity) {
    return entity
  }

  remove(id) {
    return {}
  }
}