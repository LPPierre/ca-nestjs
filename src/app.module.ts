import { Module } from '@nestjs/common';
import { BoxesController } from './boxes/boxes.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [BoxesController],
  providers: [AppService],
})
export class AppModule {}
