
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {

  async auth(username:string, email:string) {
    return { username: 'admin', email: 'admin@gmail.com' } //TODO from DB
  }
  async create(entity) {
    return entity
  }

  async findAll() {
    return []
  }

  async findOne(id) {
    return { username: 'admin', email: 'admin@gmail.com' } //TODO from DB
  }

  async update(id, entity) {
    return entity
  }

  async remove(id) {
    return {}
  }

  async activate(email, token, newPassword) {
    //1. validate link exists
    //2. update user with new password
  }

  async resetPassword() {
  }

  async changePassword(id:string, oldPassword:string, newPassword:string) {
  }


}