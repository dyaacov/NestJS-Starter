
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {

  auth(entity) {
    return { username: 'admin', email: 'admin@gmail.com' } //TODO from DB
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