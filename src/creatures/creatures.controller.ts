import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { CreaturesService } from './creatures.service';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { MoveCreatureDto } from './dto/move-creature.dto';
import { Creature } from './creature.entity';

@Controller('creatures')
export class CreaturesController {
  constructor(private creaturesService: CreaturesService) {}

  @Post()
  async create(@Body() createCreatureDto: CreateCreatureDto) {
    // return 'This action adds a new creature';
    this.creaturesService.create(createCreatureDto);
  }

  @Get()
  async findAll(): Promise<Creature[]> {
    return this.creaturesService.findAll();
  }

  @Put(':id')
  async move(@Param('id') id: string, @Body() moveCreatureDto: MoveCreatureDto) {
    // TODO
    // this.creaturesService.move(moveCreatureDto);
  }
}