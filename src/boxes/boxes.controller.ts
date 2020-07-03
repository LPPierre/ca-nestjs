import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe, Query, NotFoundException } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';
import { Box } from './box.entity';

@Controller('boxes')
export class BoxesController {
  constructor(private boxesService: BoxesService) {}

  @Post()
  async create(@Body() createBoxDto: CreateBoxDto) {
    this.boxesService.create(createBoxDto);
  }

  @Get()
  async findAll(): Promise<Box[]> {
    return this.boxesService.findAll();
  }

  @Get('findByTrainer')
  async findByTrainer(@Query('trainer', ParseIntPipe) trainerId: number): Promise<Box[]> {
    const boxes = await this.boxesService.findByTrainer(trainerId);
    if (!(boxes.length > 0)) {
      throw new NotFoundException(`No boxes found for trainer ${trainerId}.`); 
    }
    return boxes;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Box> {
    const box = await this.boxesService.findOne(id);
    if (typeof box === undefined) {
      throw new NotFoundException(`Box ${id} not found.`);
    }
    return box;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    // TODO Validation

    return this.boxesService.remove(id);
  }
}