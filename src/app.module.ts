import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxesController } from './boxes/boxes.controller';
import { AppService } from './app.service';
import { BoxesService } from './boxes/boxes.service';
import { CreaturesModule } from './creatures/creatures.module';

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
    CreaturesModule,
  ],
  controllers: [BoxesController],
  providers: [AppService, BoxesService],
})
export class AppModule {}
