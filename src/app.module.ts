import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxesController } from './boxes/boxes.controller';
import { AppService } from './app.service';
import { BoxesService } from './boxes/boxes.service';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CreaturesModule,
  ],
  controllers: [BoxesController],
  providers: [AppService, BoxesService],
})
export class AppModule {}
