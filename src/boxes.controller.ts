import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('boxes')
export class BoxesController {
  @Post()
  create(): string {
    return 'This action adds a new box';
  }

  @Delete()
  delete(): string {
    return 'This action removes a box';
  }

  @Get()
  findAll(): string {
    return 'This action returns all boxes';
  }

  @Get()
  findOne(): string {
    return 'This action returns a box';
  }
}