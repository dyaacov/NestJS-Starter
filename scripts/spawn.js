const Fs = require('fs')

const [ ,, name ] = process.argv

const CompNameLower = name
const CompName = name[ 0 ].toUpperCase() + name.slice(1)
const dir = `${process.cwd()}/src/${name}`

const moduleFile = `import { Module } from '@nestjs/common'
import { ${CompName}Controller } from './${CompNameLower}.controller'
import { ${CompName}Service } from './${CompNameLower}.service'

@Module({
  imports: [],
  controllers: [${CompName}Controller],
  providers: [${CompName}Service],
})
export class ${CompName}Module {}
`

const controllerFile = `
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { ${CompName}Service } from './${CompNameLower}.service'

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

@Injectable()
export class ${CompName}Service {
  
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

Fs.mkdirSync(dir)
Fs.writeFileSync(`${dir}/${CompNameLower}.service.ts`, serviceFile)
Fs.writeFileSync(`${dir}/${CompNameLower}.controller.ts`, controllerFile)
Fs.writeFileSync(`${dir}/${CompNameLower}.module.ts`, moduleFile)
