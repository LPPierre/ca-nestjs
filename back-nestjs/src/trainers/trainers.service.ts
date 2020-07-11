import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from './trainer.entity';
import { TrainerRepository } from './trainer.repository';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer)
    private trainersRepository: TrainerRepository,
  ) {}

  private readonly trainers: Trainer[] = [];

  async create(trainer: Trainer): Promise<Trainer> {
    await this.trainersRepository.save(trainer);

    return trainer;
  }

  async findAll(): Promise<Trainer[]> {
    return this.trainersRepository.find({relations: ['boxes']});
  }

  async findOne(id: string): Promise<Trainer> {
    return this.trainersRepository.findOne({where: id, relations: ['boxes']});
  }
}