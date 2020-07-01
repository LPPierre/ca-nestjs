import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { MoveCreatureDto } from './dto/move-creature.dto';

@Controller('creatures')
export class CreaturesController {
  @Post()
  create(@Body() CreateCreatureDto: CreateCreatureDto): string {
    return 'This action adds a new creature';
  }

  @Put(':id')
  move(@Param('id') id: string): string {
    return 'This action removes a #${id} box';
  }
}