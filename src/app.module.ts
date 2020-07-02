import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxesController } from './boxes/boxes.controller';
import { AppService } from './app.service';
import { CreaturesController } from './creatures/creatures.controller';
import { BoxesService } from './boxes/boxes.service';
import { CreaturesService } from './creatures/creatures.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'ca-nestjs',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [BoxesController, CreaturesController],
  providers: [AppService, BoxesService, CreaturesService],
})
export class AppModule {}
