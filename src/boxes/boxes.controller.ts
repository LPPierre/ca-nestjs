import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Box> {
    return this.boxesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    // TODO
    return 'This action removes a #${id} box';
  }
}