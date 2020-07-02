import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreaturesController } from './creatures.controller';
import { CreaturesService } from './creatures.service';
import { CreatureRepository } from './creature.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CreatureRepository])],
  controllers: [CreaturesController],
  providers: [CreaturesService],
})
export class CreaturesModule {}