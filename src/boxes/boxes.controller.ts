import { Body, Controller, Delete, Get, Param, Post, ParseIntPipe, Query } from '@nestjs/common';
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
  async findAll(@Query('trainer', ParseIntPipe) trainerId: number): Promise<Box[]> {
    if (trainerId) {
      // TODO this.boxesService.findByTrainer(trainerId);
    }

    return this.boxesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Box> {
    return this.boxesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    // TODO Validation

    return this.boxesService.remove(id);
  }
}