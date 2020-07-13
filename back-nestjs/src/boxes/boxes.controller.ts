import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe, Query, NotFoundException, ValidationPipe, UsePipes } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';
import { Box } from './box.entity';
import { CreaturesService } from '../creatures/creatures.service';
import { Creature } from '../creatures/creature.entity';

@Controller('boxes')
export class BoxesController {
  trainersService: any;
  constructor(private boxesService: BoxesService, private creaturesService: CreaturesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createBoxDto: CreateBoxDto) {
    const trainerId = createBoxDto.trainerId;
    const trainer = await this.trainersService.findOne(trainerId);
    if (typeof trainer === undefined) {
      throw new NotFoundException(`Trainer ${trainerId} not found`)
    }

    createBoxDto.trainer = trainer;
    this.boxesService.create(createBoxDto);
  }

  @Get()
  async findAll(): Promise<Box[]> {
    return this.boxesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Box> {
    const box = await this.boxesService.findOne(id);
    if (typeof box === undefined) {
      throw new NotFoundException(`Box ${id} not found.`);
    }
    return box;
  }

  @Get(':id/creatures')
  async findBoxCreatures(@Param('id', ParseIntPipe) id: number): Promise<Creature[]> {
    const creatures = await this.creaturesService.findByBox(id);
    if (!(creatures.length > 0)) {
      throw new NotFoundException(`No creatures found for box ${id}.`); 
    }
    return creatures;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    // TODO Validation
    return this.boxesService.remove(id);
  }
}