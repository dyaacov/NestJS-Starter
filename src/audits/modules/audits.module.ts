import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuditsController } from '../'
import { AuditsService } from '../'
import { AuditsSchema } from '../'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'audits', schema: AuditsSchema }])],
  controllers: [AuditsController],
  providers: [AuditsService],
})
export class AuditsModule {}
