import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoxesController } from './boxes/boxes.controller';
import { AppService } from './app.service';

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
  controllers: [BoxesController],
  providers: [AppService],
})
export class AppModule {}
