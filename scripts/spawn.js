const Fs = require('fs')

const [, , name] = process.argv

const CompNameLower = name
const CompName = name[0].toUpperCase() + name.slice(1)
const dir = `${process.cwd()}/src/${name}`

const moduleFile = `import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ${CompName}Controller } from '../'
import { ${CompName}Service } from '../'
import { ${CompName}Schema } from '../'

@Module({
  imports: [MongooseModule.forFeature([{ name: '${CompName}', schema: ${CompName}Schema }])],
  controllers: [${CompName}Controller],
  providers: [${CompName}Service],
})
export class ${CompName}Module {}
`

const controllerFile = `
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { ${CompName}Service } from '../'

@Controller('${CompNameLower}')
export class ${CompName}Controller {
  constructor(private readonly ${CompNameLower}Service: ${CompName}Service) {}

  @Post()
  async create(@Body() entity, @Req() request) {
    return await this.${CompNameLower}Service.create(entity)
  }

  @Get()
  async findAll(@Req() request) {
    return await this.${CompNameLower}Service.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id, @Req() request) {
    return await this.${CompNameLower}Service.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() entity, @Req() request) {
    return await this.${CompNameLower}Service.update(id, entity)
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
  constructor(@InjectModel('${CompName}') private readonly model) {}
  
  async create(entity) {
    return entity
  }

  async findAll() {
    return []
  }

  async findOne(id) {
    return {}
  }

  async update(id, entity) {
    return entity
  }

  async remove(id) {
    return {}
  }
}`

const modelFile = `
import * as mongoose from 'mongoose'

export const ${CompName}Schema = new mongoose.Schema({
  name: String,
})
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
