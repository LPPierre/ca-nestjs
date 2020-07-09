import { TrainersService } from './trainers.service';
import { Module } from '@nestjs/common';

export class TrainersServiceMock {
    findAll() {
        return [
            {
                id: 1,
                firstName: 'Pierre',
                lastName: 'Le Page',
                boxes: [],
            },
            {
                id: 2,
                firstName: 'Jean',
                lastName: 'Dupont',
                boxes: [],
            }
        ]
    };

    findOne() {
        return {
            id: 1,
            firstName: 'Pierre',
            lastName: 'Le Page',
            boxes: [],
        };
    };
}