import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BoxesController } from './boxes/boxes.controller';
import { BoxesService } from './boxes/boxes.service';
import { BoxRepository } from './boxes/box.repository';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([BoxRepository]),
    CreaturesModule,
  ],
  controllers: [BoxesController],
  providers: [AppService, BoxesService],
})
export class AppModule {}
