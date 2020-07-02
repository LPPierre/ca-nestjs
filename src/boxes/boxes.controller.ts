import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';
import { Box } from './interfaces/box.interface';

@Controller('boxes')
export class BoxesController {
  constructor(private boxesService: BoxesService) {}

  @Post()
  async create(@Body() createBoxDto: CreateBoxDto) {
    // return 'This action adds a new box';
    this.boxesService.create(createBoxDto);
  }

  @Get()
  async findAll(): Promise<Box[]> {
    //return 'This action returns all boxes';
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