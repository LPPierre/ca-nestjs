import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Box } from '../boxes/box.entity';
import { Creature } from './creature.entity';
import { CreatureRepository } from './creature.repository';

@Injectable()
export class CreaturesService {
  constructor(
    @InjectRepository(Creature)
    private creaturesRepository: CreatureRepository,
  ) {}

  private readonly creatures: Creature[] = [];

  async create(creature: Creature): Promise<Creature> {
    await this.creaturesRepository.save(creature);

    return creature;
  }

  async move(creature: Creature, box: Box): Promise<Creature> {
    // TODO Check box availability (size + types)
  
    await this.creaturesRepository.save({
      id: creature.id,
      box: box
    });

    return creature;
  }
    
  async findAll(): Promise<Creature[]> {
    return this.creaturesRepository.find();
  }
}