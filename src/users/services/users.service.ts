
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel('UsersModel') private readonly model) { }

  async auth(username: string, password: string) {
    return this.model.find({ username })
  }

  async create(entity) {
    return entity
  }

  async findAll() {
    return []
  }

  async findOne(query) {
    return this.model.find(query)
  }

  async update(id, entity) {
    return entity
  }

  async remove(id) {
    return {}
  }
}