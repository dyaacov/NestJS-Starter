
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Utils } from '../../core/utils'

@Injectable()
export class UsersService {

  constructor(@InjectModel('users') private readonly model) { console.log('#UsersService#') }

  async auth(username: string, password: string) {
    const hashedNewPassword = Utils.hashPassword(password)
    return await this.find({ email: username, password: hashedNewPassword })
  }

  async create(entity) {
    return await this.model.create(entity)
  }

  async findAll(params = { limit: 10, offset: 1 }) {
    const limit = params.limit || 10
    const offset = params.offset || 1
    const query = this._buildQuery(params)
    const count = await this.model.countDocuments(query)
    const items = await this.model.find(query)
      .skip((limit * offset) - limit)
      .limit(limit)
    return {
      items,
      current: offset,
      totalItems: count,
      totalPages: Math.max(1, Math.ceil(count / limit))
    }
  }

  async find(query) {
    return await this.model.findOne(query)
  }

  async findOne(id) {
    return await this.model.findById(id)
  }

  async update(id, entity) {
    entity = this._extractUpdateableFields(entity)
    if (entity) {
      return await this.model.findByIdAndUpdate(id, entity, { new: true })
    }
    return entity
  }

  async remove(id) {
    return await this.model.findByIdAndRemove(id)
  }

  async forgotPassword(email: String) {
    throw new Error("Method not implemented.");
  }

  async changePassword(id, oldPassword, newPassword) {
    const invalidErrorMsg = 'Invalid email or password'
    const user = await this.findOne(id)
    if (!user || !Utils.comparePassword(oldPassword, user.hash)) {
      throw new NotFoundException()
    }
    const hashedNewPassword = Utils.hashPassword(newPassword)
    return await this.model.findByIdAndUpdate(id, { password: hashedNewPassword }, { new: true })
  }

  _buildQuery(params) {
    //TODO extract relevant parameters for the query based on your business logic
    return params
  }

  _extractUpdateableFields(entity) {
    //TODO extract ONLY relevant fields and allowed to be updated fields
    //for example, do not allow password update, use a dedicated service for change password
    return entity
  }
}