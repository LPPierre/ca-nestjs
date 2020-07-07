import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpService } from '@nestjs/common';
import * as request from 'supertest';
import { TrainersController } from './../../src/trainers/trainers.controller';
import { TrainersService } from './../../src/trainers/trainers.service';
import { TrainersServiceMock } from './../../src/trainers/trainers.service.spec';

describe('TrainersController (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  beforeEach(async () => {
    const TrainersServiceProvider = {
        provide: TrainersService,
        useClass: TrainersServiceMock,
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TrainersController],
      providers: [TrainersServiceProvider],
    }).compile();

    app = moduleFixture.createNestApplication();
    httpService = moduleFixture.get<HttpService>(HttpService);
    await app.init();
  });

  it('/ (GET)', () => {
    const expectedResult = [];
    const response = request(app.getHttpServer())
      .get('/trainers')
      .expect(200);
    expect(response.text).toEqual(expectedResult);
  });

  afterEach(async () => {
    await app.close();
  });
});
