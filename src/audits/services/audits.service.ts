
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class AuditsService {
  constructor(@InjectModel('audits') private readonly model) { }

  async create(entity) {
    return await this.model.create(entity)
  }

  async findAll(params = { limit: 10, offset: 1 }) {
    console.log()
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

  _buildQuery(params) {
    const filter = {}
    //TODO extract relevant parameters for the query based on your business logic
    return filter
  }

  _extractUpdateableFields(entity) {
    //TODO extract ONLY relevant fields and allowed to be updated fields
    //for example, do not allow password update, use a dedicated service for change password
    return entity
  }

}