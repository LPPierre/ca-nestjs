import { Trainer } from "src/trainers/trainer.entity";
import { IsArray, ArrayMaxSize, IsEmpty, IsInt } from 'class-validator';
import { Creature } from 'src/creatures/creature.entity';

export class CreateBoxDto {
    readonly id: number;

    trainerId: number;

    @IsEmpty()
    trainer: Trainer;

    @IsEmpty()
    creatures: Creature[];
}