import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BoxesController } from './boxes/boxes.controller';
import { BoxesService } from './boxes/boxes.service';
import { BoxRepository } from './boxes/box.repository';
import { CreaturesModule } from './creatures/creatures.module';
import { TrainerRepository } from './trainers/trainer.repository';
import { TrainersController } from './trainers/trainers.controller';
import { TrainersService } from './trainers/trainers.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([BoxRepository, TrainerRepository]),
    CreaturesModule,
  ],
  controllers: [BoxesController, TrainersController],
  providers: [AppService, BoxesService, TrainersService],
})
export class AppModule {}
