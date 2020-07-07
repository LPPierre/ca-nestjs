import { Body, Controller, Param, Post, Put, Get, Query, ParseIntPipe, NotFoundException, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { MoveCreatureDto } from './dto/move-creature.dto';
import { Creature } from './creature.entity';

@Controller('creatures')
export class CreaturesController {
  constructor(private creaturesService: CreaturesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createCreatureDto: CreateCreatureDto) {
    this.creaturesService.create(createCreatureDto);
  }

  @Get()
  async findAll(): Promise<Creature[]> {
    return this.creaturesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Creature> {
    const creature = await this.creaturesService.findOne(id);
    if (typeof creature === undefined) {
      throw new NotFoundException(`Creature ${id} not found.`);
    }
    return creature;
  }

  @Put(':id')
  async updateBox(@Param('id', ParseIntPipe) id: number, @Body() moveCreatureDto: MoveCreatureDto) {
    // TODO
    // this.creaturesService.changeBox(moveCreatureDto);
  }
}