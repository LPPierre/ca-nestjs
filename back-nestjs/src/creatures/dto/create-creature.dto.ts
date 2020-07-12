import { Box } from 'src/boxes/box.entity';
import { CreatureType } from '../creatureType.enum';
import { IsString, IsInt, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateCreatureDto {
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: CreatureType;

    @IsInt()
    boxId: number;

    box: Box;
}