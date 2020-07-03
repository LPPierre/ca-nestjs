import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CreaturesModule } from './creatures.module';
import { CreaturesService } from './creatures.service';
import { CreaturesServiceMock } from './creatures.service.spec';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let creaturesService: CreaturesServiceMock;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CreaturesModule],
    })
      .overrideProvider(CreaturesService)
      .useClass(CreaturesServiceMock)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET creatures`, () => {
    return request(app.getHttpServer())
      .get('/creatures')
      .expect(200)
      .expect({
        data: creaturesService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});