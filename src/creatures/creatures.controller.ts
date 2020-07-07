import { Body, Controller, Param, Post, Put, Get, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { MoveCreatureDto } from './dto/move-creature.dto';
import { Creature } from './creature.entity';

@Controller('creatures')
export class CreaturesController {
  constructor(private creaturesService: CreaturesService) {}

  @Post()
  async create(@Body() createCreatureDto: CreateCreatureDto) {
    this.creaturesService.create(createCreatureDto);
  }

  @Get()
  async findAll(): Promise<Creature[]> {
    return this.creaturesService.findAll();
  }

  @Put(':id')
  async changeBox(@Param('id') id: string, @Body() moveCreatureDto: MoveCreatureDto) {
    // TODO
    // this.creaturesService.changeBox(moveCreatureDto);
  }
}