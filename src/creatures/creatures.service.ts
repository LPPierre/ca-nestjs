import { Injectable } from '@nestjs/common';
import { Creature } from './interfaces/creature.interface';
import { Box } from '../boxes/interfaces/box.interface';

@Injectable()
export class CreaturesService {
  private readonly creatures: Creature[] = [];

  create(creature: Creature) {
    this.creatures.push(creature);
  }

  move(creature: Creature, box: Box) {
    // TODO
    // creature.box = box._id;
  }
    
  findAll(): Creature[] {
    return this.creatures;
  }
}