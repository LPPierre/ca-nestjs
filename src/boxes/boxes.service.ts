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
    return this.boxesRepository.find();
  }

  async findOne(id: string): Promise<Box> {
    return this.boxesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.boxesRepository.delete(id);
  }
}