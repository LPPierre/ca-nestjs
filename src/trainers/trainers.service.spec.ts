import { Test, TestingModule } from '@nestjs/testing';
import { TrainersService } from './trainers.service';

export class TrainersServiceMock {
    getTrainer(firstname: string, lastname: string) {
        return {
            firstName: 'Foo',
            lastName: 'Bar',
            boxes: [],
        }
    };
}