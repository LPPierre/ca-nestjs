import { Trainer } from "src/trainers/trainer.entity";
import { IsString, IsArray, ArrayMaxSize } from 'class-validator';
import { Creature } from 'src/creatures/creature.entity';

export class CreateBoxDto {
    readonly id: number;

    trainer: Trainer;

    @IsArray()
    @ArrayMaxSize(24)
    creatures: Creature[];
}