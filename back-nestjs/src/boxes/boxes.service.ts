import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Box } from './box.entity';
import { BoxRepository } from './box.repository';

@Injectable()
export class BoxesService {
  constructor(
    @InjectRepository(Box)
    private boxesRepository: BoxRepository,
  ) {}

  private readonly boxes: Box[] = [];

  async create(box: Box): Promise<Box> {
    await this.boxesRepository.save(box);

    return box;
  }

  async findAll(): Promise<Box[]> {
    return this.boxesRepository.find({relations: ['trainer', 'creatures']});
  }

  async findByTrainer(trainerId: number): Promise<Box[]> {
    return this.boxesRepository.find({relations: ['creatures'], where: {trainer: trainerId}});
  }

  async findOne(id: number): Promise<Box> {
    return this.boxesRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    // TODO Validation: box must be empty
    await this.boxesRepository.delete(id);
  }
}