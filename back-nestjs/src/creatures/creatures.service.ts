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

  async create(creature: Creature) {
    // TODO Validation
  
    await this.creaturesRepository.save(creature);
  }

  async updateBox(creature: Creature) {
    // TODO Validation: check box availability (size + types)

    await this.creaturesRepository.save({
      id: creature.id,
      box: creature.box
    });
  }
    
  async findAll(): Promise<Creature[]> {
    return this.creaturesRepository.find();
  }

  async findOne(id: number): Promise<Creature> {
    return this.creaturesRepository.findOne(id);
  }

  async findByBox(boxId: number): Promise<Creature[]> {
    return this.creaturesRepository.find({box: {id: boxId}});
  }
}