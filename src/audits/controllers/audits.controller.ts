
import { Get, Post, Delete, Put, Body, Param, Req, Controller } from '@nestjs/common'
import { AuditsService } from '../'

@Controller('api/v1/audit')
export class AuditsController {
  constructor(private readonly auditsService: AuditsService) {}

  @Post()
  async create(@Body() entity, @Req() request) {
    return await this.auditsService.create(entity)
  }

  @Get()
  async findAll(@Req() request) {
    return await this.auditsService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id, @Req() request) {
    return await this.auditsService.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() entity, @Req() request) {
    return await this.auditsService.update(id, entity)
  }

  @Delete(':id')
  async remove(@Param('id') id, @Req() request) {
    return await this.auditsService.remove(id)
  }
}
