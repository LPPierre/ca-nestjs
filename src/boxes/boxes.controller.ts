import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';

@Controller('boxes')
export class BoxesController {
  constructor(private boxesService: BoxesService) {}

  @Post()
  create(@Body() CreateBoxDto: CreateBoxDto): string {
    return 'This action adds a new box';
  }

  @Get()
  findAll(): string {
    return 'This action returns all boxes';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return 'This action returns a #${id} box';
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'This action removes a #${id} box';
  }
}