import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe, Query, NotFoundException } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';
import { Box } from './box.entity';
import { CreaturesService } from 'src/creatures/creatures.service';
import { Creature } from 'src/creatures/creature.entity';

@Controller('boxes')
export class BoxesController {
  constructor(private boxesService: BoxesService, private creaturesService: CreaturesService) {}

  @Post()
  async create(@Body() createBoxDto: CreateBoxDto) {
    this.boxesService.create(createBoxDto);
  }

  @Get()
  async findAll(): Promise<Box[]> {
    return this.boxesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Box> {
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
  remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    // TODO Validation

    return this.boxesService.remove(id);
  }
}