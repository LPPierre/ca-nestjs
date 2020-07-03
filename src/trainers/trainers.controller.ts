import { Body, Controller, Delete, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { Trainer } from './trainer.entity';

@Controller('trainers')
export class TrainersController {
  constructor(private trainersService: TrainersService) {}

  @Post()
  async create(@Body() createTrainerDto: CreateTrainerDto) {
    this.trainersService.create(createTrainerDto);
  }

  @Get()
  async findAll(): Promise<Trainer[]> {
    return this.trainersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Trainer> {
    const trainer = await this.trainersService.findOne(id);
    if (trainer === undefined) {
      throw new NotFoundException('Trainer ${id} not found.');
    }
    return trainer;
  }
}