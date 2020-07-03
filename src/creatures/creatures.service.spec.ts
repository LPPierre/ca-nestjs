import { Test, TestingModule } from '@nestjs/testing';
import { CreaturesService } from './creatures.service';

export class CreaturesServiceMock {
    create() {
        return [
            {
                id: 1,
                name: 'Bulbizarre',
                type: 'GRASS',
                box: 1,
            },
        ];
    }

    findAll() {
        return [
            {
                id: 1,
                name: 'Bulbizarre',
                type: 'GRASS',
                box: 1,
            },
            {
                id: 2,
                name: 'Salamèche',
                type: 'FIRE',
                box: 1,
            },
            {
                id: 3,
                name: 'Reptincel',
                type: 'FIRE',
                box: 1
            },
            {
                id: 4,
                name: 'Carapuce',
                type: 'WATER',
                box: 2,
            }
        ];
    }

    findByBox(boxId: 2) {
        return [
            {
                id: 4,
                name: 'Carapuce',
                type: 'WATER',
                box: boxId,
            }
        ];
    }
}