import { Body, Controller, Delete, Get, Param, Post, NotFoundException, ParseIntPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { Trainer } from './trainer.entity';
import { Box } from '../boxes/box.entity';
import { BoxesService } from '../boxes/boxes.service';

@Controller('trainers')
export class TrainersController {
  constructor(private trainersService: TrainersService, private boxesService: BoxesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createTrainerDto: CreateTrainerDto) {
    this.trainersService.create(createTrainerDto);
  }

  @Get()
  async findAll(): Promise<Trainer[]> {
    return this.trainersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Trainer> {
    const trainer = await this.trainersService.findOne(id);
    if (trainer === undefined) {
      throw new NotFoundException(`Trainer ${id} not found.`);
    }
    return trainer;
  }

  @Get(':id/boxes')
  async findTrainerBoxes(@Param('id', ParseIntPipe) id: number): Promise<Box[]> {
    const boxes = await this.boxesService.findByTrainer(id);
    if (!(boxes.length > 0)) {
      throw new NotFoundException(`No boxes found for trainer ${id}.`); 
    }
    return boxes;
  }
}