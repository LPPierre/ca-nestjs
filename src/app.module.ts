import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BoxesController } from './boxes/boxes.controller';
import { BoxesService } from './boxes/boxes.service';
import { BoxRepository } from './boxes/box.repository';
import { TrainerRepository } from './trainers/trainer.repository';
import { TrainersController } from './trainers/trainers.controller';
import { TrainersService } from './trainers/trainers.service';
import { AppController } from './app.controller';
import { CreatureRepository } from './creatures/creature.repository';
import { CreaturesController } from './creatures/creatures.controller';
import { CreaturesService } from './creatures/creatures.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([BoxRepository, CreatureRepository, TrainerRepository]),
  ],
  controllers: [AppController, BoxesController, CreaturesController, TrainersController],
  providers: [AppService, BoxesService, CreaturesService, TrainersService],
})
export class AppModule {}
