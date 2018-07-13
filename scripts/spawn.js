const Fs = require('fs')

const [, , name] = process.argv

const CompNameLower = name.toLowerCase()
const CompName = name[0].toUpperCase() + name.slice(1)
const RouteName = CompNameLower.lastIndexOf('s') === (CompNameLower.length - 1) ? CompNameLower.slice(0, CompNameLower.length - 1) : CompNameLower
const dir = `${process.cwd()}/src/${name}`

const moduleFile = `import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ${CompName}Controller } from '../'
import { ${CompName}Service } from '../'
import { ${CompName}Schema } from '../'

@Module({
  imports: [MongooseModule.forFeature([{ name: '${CompNameLower}', schema: ${CompName}Schema }])],
  controllers: [${CompName}Controller],
  providers: [${CompName}Service],
})
export class ${CompName}Module {}
`

const controllerFile = `
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { ${CompName}Service } from '../'

@Controller('api/v1/${RouteName}')
export class ${CompName}Controller {
  constructor(private readonly ${CompNameLower}Service: ${CompName}Service) {}

  @Post()
  async create(@Body() body, @Req() request) {
    return await this.${CompNameLower}Service.create(body)
  }

  @Get()
  async findAll(@Req() request) {
    return await this.${CompNameLower}Service.findAll(request.params)
  }

  @Get(':id')
  async findOne(@Param('id') id, @Req() request) {
    return await this.${CompNameLower}Service.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body, @Req() request) {
    return await this.${CompNameLower}Service.update(id, body)
  }

  @Delete(':id')
  async remove(@Param('id') id, @Req() request) {
    return await this.${CompNameLower}Service.remove(id)
  }
}
`
const serviceFile = `
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ${CompName}Service {
  constructor(@InjectModel('${CompNameLower}') private readonly model) {}
  
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

}`

const modelFile = `
const mongoose = require('mongoose')
const Schema = mongoose.Schema
export const ${CompName}Schema = new Schema({
  name: String
}, { timestamps: true })
`

const indexFile = `
export * from './services/${CompNameLower}.service'
export * from './controllers/${CompNameLower}.controller'
export * from './models/${CompNameLower}.model'

`

const modulesDir = `${dir}/modules`
const controllersDir = `${dir}/controllers`
const servicessDir = `${dir}/services`
const modelssDir = `${dir}/models`
Fs.mkdirSync(dir)
Fs.mkdirSync(`${modulesDir}`)
Fs.mkdirSync(`${controllersDir}`)
Fs.mkdirSync(`${servicessDir}`)
Fs.mkdirSync(`${modelssDir}`)
Fs.writeFileSync(`${dir}/index.ts`, indexFile)
Fs.writeFileSync(`${servicessDir}/${CompNameLower}.service.ts`, serviceFile)
Fs.writeFileSync(`${controllersDir}/${CompNameLower}.controller.ts`, controllerFile)
Fs.writeFileSync(`${modulesDir}/${CompNameLower}.module.ts`, moduleFile)
Fs.writeFileSync(`${modelssDir}/${CompNameLower}.model.ts`, modelFile)
