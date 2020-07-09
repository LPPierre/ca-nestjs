import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpService, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { TrainersController } from './../../src/trainers/trainers.controller';
import { TrainersService } from './../../src/trainers/trainers.service';
import { CreateTrainerDto } from 'src/trainers/dto/create-trainer.dto';
import { TrainersServiceMock } from './../../src/trainers/trainers.service.spec';
import { BoxesService } from './../../src/boxes/boxes.service';
import { TrainerRepository } from './../../src/trainers/trainer.repository';
import { BoxRepository } from './../../src/boxes/box.repository';

describe('TrainersController (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  let trainerRepository: TrainerRepository;
  let trainersController: TrainersController;
  let trainersService: TrainersService;
  let boxRepository: BoxRepository;
  let boxesService: BoxesService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TrainersController],
      providers: [TrainersService],
    }).compile();

    app = moduleFixture.createNestApplication();

    trainerRepository = new TrainerRepository;
    trainersService = new TrainersService(trainerRepository);
    boxRepository = new BoxRepository();
    boxesService = new BoxesService(boxRepository);
    trainersController = new TrainersController(trainersService, boxesService);
    httpService = moduleFixture.get<HttpService>(HttpService);

    await app.init();
  });

  // it('should create a trainer', () => {
  //   const trainer: CreateTrainerDto = {
  //     id: 1,
  //     firstName: 'Pierre',
  //     lastName: 'Le Page',
  //     boxes: [],
  //   }
  //   return request(app.getHttpServer())
  //     .post('/trainers')
  //     .set("Accept", "application/json")
  //     .send(trainer)
  //     .expect(HttpStatus.CREATED);
  // });

  it('should return a list of trainers', () => {
    const list = []; // TODO = trainersService.findAll()
    return request(app.getHttpServer())
      .get('/trainers')
      .expect(HttpStatus.OK)
      .expect(list);
  });

  it('should return a trainer' , () => {
    const trainer = {id: 1};
    return request(app.getHttpServer())
      .get(`trainers/${trainer.id}`)
      .expect(HttpStatus.OK)
      .expect(trainer);
  });

  afterAll(async () => {
    await app.close();
  });
});
